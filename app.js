(function () {
  "use strict";

  const data = window.PARASITOLAB_DATA;
  const logic = window.ParasitoLogic;
  const main = document.getElementById("main");
  const modalRoot = document.getElementById("modal-root");
  const liveStatus = document.getElementById("live-status");

  if (!data || !logic || !main || !modalRoot) {
    document.body.textContent = "Não foi possível iniciar o PARASITOLAB. Confira se todos os arquivos do projeto foram publicados.";
    return;
  }

  let storage;
  try {
    storage = window.localStorage;
  } catch {
    storage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
  }

  const state = {
    screen: "home",
    guideReturn: "home",
    search: "",
    progress: logic.safeLoadProgress(storage, data.missions),
    reports: logic.safeLoadReports(storage, data.missions),
    bestReport: logic.safeLoadBestReport(storage, data.missions),
    selectedReportId: null,
    lastFocused: null
  };

  const letters = ["A", "B", "C", "D"];
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  const score = () => logic.calculateScore(orderedMissions(), state.progress.answers);
  const orderedMissions = () => state.progress.missionOrder
    ? state.progress.missionOrder.map(id => data.missions.find(mission => mission.id === id))
    : data.missions;
  const currentMission = () => orderedMissions()[state.progress.activeIndex];
  const currentOptions = (mission) => state.progress.optionOrders?.[mission.id] || mission.options;
  const hasAnswer = (mission) => Object.hasOwn(state.progress.answers, mission.id);
  const persist = () => logic.safeSaveProgress(storage, state.progress);
  const guideAvailable = () => !state.progress.started || score().finished;
  const availableReports = () => state.bestReport && !state.reports.some(report => report.id === state.bestReport.id)
    ? [...state.reports, state.bestReport] : state.reports;

  function rememberCompletedReport() {
    if (!score().finished) return;
    if (!state.progress.reportId) {
      state.progress.reportId = `report-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      persist();
    }
    state.selectedReportId = state.progress.reportId;
    if (availableReports().some((report) => report.id === state.progress.reportId)) return;
    const answers = Object.fromEntries(orderedMissions().map((mission) =>
      [mission.id, { ...state.progress.answers[mission.id] }]));
    const durationMs = state.progress.startedAt === null ? null : Math.max(0, Date.now() - state.progress.startedAt);
    state.reports = [{ id: state.progress.reportId, durationMs, answers, missionIds: orderedMissions().map(mission => mission.id) },
      ...state.reports].slice(0, 10);
    state.bestReport = logic.bestReport(data.missions, state.reports, state.bestReport);
    const bestSaved = logic.safeSaveBestReport(storage, state.bestReport);
    const reportsSaved = logic.safeSaveReports(storage, state.reports);
    if (!bestSaved || !reportsSaved) {
      announce("Não foi possível salvar o histórico neste navegador. O relatório continua disponível nesta sessão.");
    }
  }

  function openReports(id) {
    if (!guideAvailable()) {
      announce("Conclua a investigação atual para consultar os relatórios anteriores.");
      return;
    }
    rememberCompletedReport();
    state.selectedReportId = availableReports().some((report) => report.id === id)
      ? id : availableReports()[0]?.id || null;
    showScreen("results");
  }

  function announce(message) {
    liveStatus.textContent = "";
    requestAnimationFrame(() => { liveStatus.textContent = message; });
  }

  function updateNavigation() {
    const selected = state.screen;
    document.querySelectorAll("[data-nav]").forEach((button) => {
      button.hidden = (button.dataset.nav === "guide" && !guideAvailable()) ||
        (button.dataset.nav === "mission" && state.screen !== "mission") ||
        (button.dataset.nav === "results" && state.screen !== "results");
      const active = button.dataset.nav === selected;
      button.classList.toggle("is-current", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  function render(scrollTop = true) {
    updateNavigation();
    if (state.screen === "guide") main.innerHTML = renderGuide();
    else if (state.screen === "mission") main.innerHTML = renderMission();
    else if (state.screen === "results") main.innerHTML = renderResults();
    else main.innerHTML = renderHome();

    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: "instant" });
      main.focus({ preventScroll: true });
    }
  }

  function showScreen(next, scrollTop = true) {
    if (next === "guide" && !guideAvailable()) {
      announce("A colinha fica disponível antes de iniciar e após concluir a investigação.");
      return;
    }
    closeZoom(false);
    state.screen = next;
    render(scrollTop);
  }

  function startOrResume() {
    if (!state.progress.started) {
      state.progress = logic.newGameProgress(data.missions);
      state.progress.startedAt = Date.now();
    }
    state.progress.started = true;
    persist();
    const progressScore = score();
    if (progressScore.finished) openReports();
    else showScreen("mission");
  }

  function home() {
    showScreen("home");
  }

  function openGuide() {
    if (!guideAvailable()) {
      announce("A colinha fica disponível antes de iniciar e após concluir a investigação.");
      return;
    }
    state.guideReturn = state.screen === "guide" ? state.guideReturn : state.screen;
    showScreen("guide");
  }

  function guideBack() {
    if (state.guideReturn === "mission" && !score().finished) showScreen("mission");
    else if (state.guideReturn === "results" && availableReports().length) showScreen("results");
    else showScreen("home");
  }

  function renderHome() {
    const progressScore = score();
    const hasProgress = state.progress.started;
    const primaryText = progressScore.finished ? "Jogar novamente" : hasProgress ? "Continuar investigação" : "Iniciar investigação";
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <span class="eyebrow">PROTOCOLO 004 / LABORATÓRIO VIRTUAL</span>
          <h1 id="hero-title">Há um mistério em <span class="text-mint">cada estrutura.</span></h1>
          <p class="hero-lead">Uma amostra chegou ao laboratório. Observe as pistas, investigue os detalhes e descubra qual parasita está por trás de cada caso.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" type="button" data-action="${progressScore.finished ? "restart" : "mission"}">${primaryText} <span class="icon-arrow" aria-hidden="true">↗</span></button>
            ${availableReports().length && guideAvailable() ? `<button class="btn btn-ghost" type="button" data-action="reports">Ver relatórios →</button>` : ""}
            ${guideAvailable() ? `<button class="btn btn-ghost" type="button" data-action="guide">Consultar colinha <span aria-hidden="true">→</span></button>` : ""}
            ${hasProgress && !progressScore.finished ? `<button class="btn btn-ghost" type="button" data-action="abandon" aria-describedby="abandon-note">Desistir da investigação</button>` : ""}
          </div>
          ${hasProgress && !progressScore.finished ? `<p class="hero-footnote" id="abandon-note">Desistir apaga o progresso da partida atual. Seus relatórios anteriores são mantidos.</p>` : ""}
          <div class="hero-footnote"><span class="spark" aria-hidden="true"></span> ${data.missions.length} missões completas disponíveis · Sem cadastro · Gratuito</div>
        </div>
        <div class="hero-visual" aria-label="Ilustração conceitual de uma investigação em laboratório">
          <div class="visual-top"><span class="micro-label">AMOSTRA EM ANÁLISE</span><span class="visual-pill">● SINAL ATIVO</span></div>
          <img class="hero-specimen" src="./assets/hero-lab.svg" alt="Arte ilustrada de uma estrutura biológica em um visor circular com marcações de laboratório.">
          <div class="visual-bottom"><div><small>EXPERIMENTO</small><strong>Identificação morfológica</strong></div><code>REF. LAB-004</code></div>
        </div>
      </section>
      <div class="section-head">
        <div><span class="section-overline">COMO FUNCIONA</span><h2>Seu protocolo de investigação</h2></div>
        <p>Um desafio educativo no qual cada resposta ajuda a entender melhor as estruturas representadas.</p>
      </div>
      <section class="process-grid" aria-label="Etapas do jogo">
        <article class="process-card"><span class="process-number">PASSO 01</span><h3>Estude as referências</h3><p>Consulte a colinha antes de iniciar. Ela fica bloqueada durante a investigação e volta a ficar disponível ao concluir.</p></article>
        <article class="process-card"><span class="process-number">PASSO 02</span><h3>Analise as evidências</h3><p>Leia o caso e observe a microfotografia. Cada pista reduz em 25 pontos o valor do acerto naquela questão.</p></article>
        <article class="process-card"><span class="process-number">PASSO 03</span><h3>Entregue seu relatório</h3><p>Escolha uma alternativa, receba uma explicação e revise o resultado.</p></article>
      </section>
      <div class="notice"><strong>Nota científica:</strong> o quiz e a colinha usam microfotografias fornecidas pela Equipe 4. A ilustração da página inicial é um mascote. As imagens são usadas para estudo; os casos têm como referência o CDC DPDx e não substituem diagnóstico laboratorial.
        <p class="site-credit"><strong>Desenvolvimento:</strong> ${renderCredits()}</p>
      </div>
    `;
  }

  function renderCredits() {
    const credits = data.credits;
    const details = [];
    if (credits.subject) details.push(`Matéria: ${escapeHtml(credits.subject)}.`);
    if (credits.discipline) details.push(`Trabalho da disciplina de ${escapeHtml(credits.discipline)}.`);
    if (credits.professor) details.push(`Professora: ${escapeHtml(credits.professor)}.`);
    if (credits.students.length) details.push(`Alunas: ${credits.students.map(escapeHtml).join(", ")}.`);
    return `Site desenvolvido por ${escapeHtml(credits.developer)}, do curso de ${escapeHtml(credits.developerCourse)} da ${escapeHtml(credits.institution)}, para auxiliar a ${escapeHtml(credits.team)} e as alunas do curso de ${escapeHtml(credits.studentCourse)}. ${details.join(" ")}`;
  }

  function verifiedCard(organism) {
    const gallery = organism.stages.map((entry) => `
      <figure class="guide-photo">
        <img src="${escapeHtml(entry.image)}" alt="Microfotografia de ${escapeHtml(organism.name)}: ${escapeHtml(entry.stage)}" loading="lazy">
        <figcaption><strong>${escapeHtml(entry.stage)}</strong><p>${escapeHtml(entry.caption)}</p></figcaption>
        <ul>${entry.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
      </figure>`).join("");
    return `
      <article class="organism-card verified" aria-label="Ficha de ${escapeHtml(organism.name)}">
        <div class="organism-top">
          <h3>${escapeHtml(organism.name)}<small>Estágios e contextos no material da equipe</small></h3>
          <a class="tag cdc-reference" href="${escapeHtml(organism.sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Referência CDC de ${escapeHtml(organism.name)} (abre em nova aba)">Referência CDC ↗</a>
        </div>
        <div class="stage-gallery">${gallery}</div>
        <div class="card-difference"><strong>Para diferenciar:</strong> ${escapeHtml(organism.difference)}${organism.note ? `<p class="organism-note"><strong>Atenção:</strong> ${escapeHtml(organism.note)}</p>` : ""}</div>
      </article>`;
  }

  function missionPhoto(mission) {
    return `<img class="microphoto-image" style="--clip-bottom:${Number(mission.imageClipBottom) || 0}%" src="${escapeHtml(mission.image)}" alt="${escapeHtml(mission.alt)}">`;
  }

  function unverifiedCard(organism) {
    return `
      <article class="organism-card" aria-label="${escapeHtml(organism.name)} — em validação">
        <div class="organism-top">
          <h3>${escapeHtml(organism.name)}<small>Organismo da lista da Equipe 4</small></h3>
          <span class="tag tag-warning">Em validação</span>
        </div>
        <p class="unverified-note">A forma biológica e a microfotografia deste organismo precisam ser confirmadas com a professora antes da inclusão nas missões.</p>
      </article>`;
  }

  function renderGuideCards() {
    const normalize = (value) => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
    const needle = normalize(state.search.trim());
    const matches = data.organisms.filter((organism) =>
      normalize(`${organism.name} ${organism.note || ""} ${organism.stages.map(entry => entry.stage).join(" ")}`).includes(needle)
    );
    if (!matches.length) return `<div class="empty-result" role="status">Nenhum organismo encontrado para essa busca.</div>`;
    return matches.map((organism) => organism.verified ? verifiedCard(organism) : unverifiedCard(organism)).join("");
  }

  function renderGuide() {
    const ready = data.organisms.filter((organism) => organism.verified).length;
    const backText = state.guideReturn === "mission" ? "Voltar à missão" : state.guideReturn === "results" ? "Voltar ao relatório" : "Voltar ao início";
    return `
      <section aria-labelledby="guide-title">
        <div class="page-heading">
          <div><span class="eyebrow">ARQUIVO DO INVESTIGADOR</span><h1 id="guide-title">Colinha <span class="text-mint">de campo.</span></h1>
          <p>Consulte o catálogo da Equipe 4 antes de iniciar ou após concluir a investigação. Os dez organismos têm fichas com microfotografias e os estágios e contextos presentes no material da equipe.</p></div>
          <button class="btn btn-ghost" type="button" data-action="guide-back">← ${backText}</button>
        </div>
        <div class="guide-toolbar">
          <div class="guide-stats"><span><strong>${data.organisms.length}</strong> organismos na lista</span><span><strong>${ready}</strong> fichas com referência</span></div>
          <label class="search-box"><span aria-hidden="true">⌕</span><span class="sr-only">Buscar organismo</span>
            <input id="guide-search" type="search" placeholder="Buscar organismo..." value="${escapeHtml(state.search)}" autocomplete="off"></label>
        </div>
        <div class="organism-grid" id="organism-grid">${renderGuideCards()}</div>
        <div class="notice"><strong>Nota científica:</strong> cada missão usa o estágio explicitado na ficha, que pode ser trofozoíto, cisto, oocisto ou forma vacuolar. Para confirmação da espécie de E. histolytica e de Cryptosporidium, a morfologia isolada pode ser insuficiente.</div>
        <div class="guide-bottom"><p>Referências científicas: CDC DPDx (botão em cada ficha). Microfotografias fornecidas pela Equipe 4 para estudo; não constituem diagnóstico laboratorial.</p>
          <button class="btn btn-primary" type="button" data-action="${score().finished ? "restart" : "mission"}">${score().finished ? "Jogar novamente" : "Iniciar investigação"} ↗</button>
        </div>
      </section>`;
  }

  function renderMission() {
    const mission = currentMission();
    const answered = hasAnswer(mission);
    const visibleStage = mission.hideStage && !answered ? "Identifique o estágio" : mission.stage;
    const selection = answered ? state.progress.answers[mission.id].choice : null;
    const correct = selection === mission.answer;
    const usedHints = state.progress.hints[mission.id] || 0;
    const missionPoints = answered ? logic.answerPoints(mission, state.progress.answers[mission.id])
      : logic.pointsForHints(mission, usedHints);
    const displayedHints = mission.hints.slice(0, usedHints)
      .map((hint, index) => `<li><strong>Pista ${index + 1}:</strong> ${escapeHtml(hint)}</li>`).join("");
    const options = currentOptions(mission).map((option, index) => {
      const isCorrect = answered && option === mission.answer;
      const isWrongSelection = answered && option === selection && !correct;
      const optionClass = isCorrect ? "option-correct" : isWrongSelection ? "option-incorrect" : "";
      const suffix = isCorrect ? " ✓" : isWrongSelection ? " ✕" : "";
      return `<button type="button" class="option ${optionClass}" data-action="answer" data-choice="${index}" ${answered ? "disabled" : ""} aria-label="Alternativa ${letters[index]}: ${escapeHtml(option)}${suffix}">
        <span class="option-index">${letters[index]}</span><span>${escapeHtml(option)}</span></button>`;
    }).join("");

    let feedback = "";
    if (answered) {
      const more = score().finished || state.progress.activeIndex === orderedMissions().length - 1;
      feedback = `
        <section class="answer-feedback ${correct ? "" : "incorrect"}" id="answer-feedback" tabindex="-1" aria-live="polite">
          <h3>${correct ? "✓ Identificação correta!" : "✦ Caso investigado!"}</h3>
          <p>${correct ? `Você somou ${missionPoints} pontos nesta missão. ` : `A resposta correta era ${escapeHtml(mission.answer)}. `}
            ${escapeHtml(mission.explanation)}</p>
          <a class="card-source" href="${mission.sourceUrl}" target="_blank" rel="noopener noreferrer">Consultar a fonte: ${escapeHtml(mission.sourceName)} ↗</a>
          <button class="btn btn-primary btn-block" type="button" data-action="next">${more ? "Ver relatório final →" : "Próxima missão →"}</button>
        </section>`;
    }

    return `
      <section aria-labelledby="mission-title">
        <div class="mission-header">
          <div><span class="eyebrow">INVESTIGAÇÃO EM ANDAMENTO <span class="text-gold">/ ${(state.progress.activeIndex + 1).toString().padStart(2, "0")} DE ${orderedMissions().length.toString().padStart(2, "0")}</span></span>
            <h1 id="mission-title">${escapeHtml(mission.title)}</h1><p>${escapeHtml(mission.eyebrow)} · ${escapeHtml(mission.specimen)}</p></div>
          <span class="tag mission-badge">${score().answered}/${orderedMissions().length} concluídas</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Progresso de missões respondidas" aria-valuemin="0" aria-valuemax="${orderedMissions().length}" aria-valuenow="${score().answered}">
          <span style="width:${score().answered / orderedMissions().length * 100}%"></span>
        </div>
        <div class="mission-map" aria-label="Mapa do progresso das missões">
          ${orderedMissions().map((entry, index) => `<span class="mission-map-cell ${hasAnswer(entry) ? "done" : index === state.progress.activeIndex ? "active" : ""}" title="Missão ${index + 1}: ${escapeHtml(entry.hideStage && !hasAnswer(entry) ? "Estágio em investigação" : entry.stage)}" aria-label="Missão ${index + 1}: ${hasAnswer(entry) ? "respondida" : index === state.progress.activeIndex ? "atual" : "pendente"}">${index + 1}</span>`).join("")}
        </div>
        <div class="mission-layout">
          <article class="lab-panel">
            <div class="panel-head"><span>FICHA DO CASO / ${(state.progress.activeIndex + 1).toString().padStart(2, "0")}</span><strong>● MICROFOTOGRAFIA</strong></div>
            <div class="story-box"><span class="micro-label">SITUAÇÃO-PROBLEMA</span><p>${escapeHtml(mission.scenario)}</p></div>
            <div class="specimen-card">
              <div class="specimen-header"><h2>Estrutura misteriosa</h2><span>${escapeHtml(visibleStage)}</span></div>
              <button type="button" class="specimen-view" data-action="zoom" aria-label="Ampliar a microfotografia da estrutura">
                ${missionPhoto(mission)}
                <span class="zoom-chip">⌕ AMPLIAR</span>
              </button>
              <p class="specimen-caption">Microfotografia fornecida pela Equipe 4. Caso didático; os detalhes visíveis dependem do preparo e do plano de foco.</p>
            </div>
          </article>
          <article class="investigation-panel">
            <div class="panel-head"><span>ANÁLISE DA AMOSTRA</span><strong>04 ALTERNATIVAS</strong></div>
            <div class="investigation-body">
              <span class="specimen-meta">INVESTIGAÇÃO MORFOLÓGICA</span>
              <h2>${escapeHtml(mission.question)}</h2>
              <div class="hint-panel">
                <div class="hint-row">
                  <div><div class="hint-title">✧ Pistas do investigador</div><p class="hint-caption">${answered ? `Pontos nesta questão: ${missionPoints}` : `Valor do acerto: ${missionPoints} pontos · −25 por pista`}</p></div>
                  <button class="hint-button" type="button" data-action="hint" ${usedHints >= mission.hints.length || answered ? "disabled" : ""}>${usedHints >= mission.hints.length ? "Todas abertas" : `Abrir pista ${usedHints + 1} (−25)`}</button>
                </div>
                ${usedHints ? `<ol class="hints-list">${displayedHints}</ol>` : ""}
              </div>
              <div class="option-list" aria-label="Alternativas">${options}</div>
              ${feedback}
            </div>
          </article>
        </div>
        <div class="mission-utility">
          <p>A colinha estará disponível ao concluir a investigação.</p>
          <p>Acerto: 100 pontos sem pistas, 75 com uma, 50 com duas • Erro: 0 pontos</p>
        </div>
      </section>`;
  }

  function renderResults() {
    const report = availableReports().find((entry) => entry.id === state.selectedReportId) || availableReports()[0];
    if (!report) {
      return `<section class="result-wrap"><h1>Relatórios</h1><p>Conclua uma investigação para salvar seu primeiro relatório.</p>
        <button class="btn btn-primary" type="button" data-action="mission">Iniciar investigação ↗</button></section>`;
    }
    const summary = logic.calculateScore(logic.missionsForReport(data.missions, report), report.answers);
    const formatDuration = (value) => {
      if (value === null) return "Tempo não registrado";
      const seconds = Math.floor(value / 1000);
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor(seconds % 3600 / 60);
      return `${hours ? `${hours} h ` : ""}${minutes} min ${seconds % 60} s`;
    };
    const history = availableReports().map((entry, index) => {
      const result = logic.calculateScore(logic.missionsForReport(data.missions, entry), entry.answers);
      const number = state.reports.length - index;
      const label = index < state.reports.length ? `Partida ${number}` : "Melhor partida";
      const best = entry.id === state.bestReport?.id;
      const selected = entry.id === report.id;
      return `<tr class="${selected ? "report-selected" : ""}">
        <th scope="row">${label}${index === 0 ? `<small>Mais recente</small>` : ""}${best && index < state.reports.length ? `<small>Melhor partida</small>` : ""}</th>
        <td>${formatDuration(entry.durationMs)}</td>
        <td>${result.points}</td>
        <td><button class="report-open" type="button" data-action="report"
          data-report-id="${escapeHtml(entry.id)}" aria-pressed="${selected}" aria-label="Abrir relatório: ${label}">${selected ? "Aberto" : "Abrir"}</button></td>
      </tr>`;
    }).join("");
    const msg = summary.correct === summary.total
      ? "Todos os casos foram identificados corretamente. Excelente observação das pistas!"
      : summary.correct === 0
        ? "Sua investigação foi concluída. Revise as explicações e tente outra vez quando quiser."
        : "Investigação concluída! Revise os detalhes para fortalecer a identificação morfológica.";
    const reviews = logic.missionsForReport(data.missions, report).map((mission) => {
      const selected = report.answers[mission.id].choice;
      const isCorrect = selected === mission.answer;
      return `
        <article class="review-card">
          <div class="review-heading"><h3>${escapeHtml(mission.number)} — ${escapeHtml(mission.title)}</h3>
          <span class="tag ${isCorrect ? "" : "tag-warning"}">${isCorrect ? `Acertou · +${logic.answerPoints(mission, report.answers[mission.id])}` : "Revisar · +0"}</span></div>
          <p><strong>Sua resposta:</strong> ${escapeHtml(selected)}<br><strong>Resposta correta:</strong> ${escapeHtml(mission.answer)}</p>
          <p>${escapeHtml(mission.explanation)}</p>
          <a href="${mission.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(mission.sourceName)} ↗</a>
        </article>`;
    }).join("");
    return `
      <section class="result-wrap" aria-labelledby="result-title">
        <section class="report-history" aria-labelledby="history-title">
          <h2 id="history-title">Últimos relatórios</h2>
          <p>Os últimos 10 relatórios e a melhor partida ficam salvos neste navegador. A melhor tem mais pontos; em empate, vence o menor tempo. Selecione uma partida para revisar.</p>
          <div class="report-table-scroll" role="region" aria-label="Histórico de relatórios" tabindex="0">
            <table class="report-table">
              <caption class="sr-only">Últimas dez partidas e melhor partida preservada</caption>
              <thead><tr><th scope="col">Partida</th><th scope="col">Tempo</th><th scope="col">Pontos</th><th scope="col">Relatório</th></tr></thead>
              <tbody>${history}</tbody>
            </table>
          </div>
        </section>
        <div class="result-hero">
          <div class="result-symbol" aria-hidden="true">✳</div>
          <span class="eyebrow">RELATÓRIO DE INVESTIGAÇÃO</span>
          <h1 id="result-title">Missão <span class="text-mint">concluída.</span></h1>
          <p>${msg}</p>
          <p>Tempo para concluir: ${formatDuration(report.durationMs)}</p>
          <div class="scoreline">
            <div><strong>${summary.points}</strong><span>Pontos</span></div>
            <div><strong>${summary.correct}/${summary.total}</strong><span>Acertos</span></div>
            <div><strong>${summary.percentage}%</strong><span>Precisão</span></div>
          </div>
          <div class="result-actions">
            <button class="btn btn-primary" type="button" data-action="restart">Jogar novamente ↗</button>
            <button class="btn btn-ghost" type="button" data-action="share">Copiar resultado ⧉</button>
          </div>
        </div>
        <h2 class="review-title">Revisão dos casos</h2>
        <div class="review-list">${reviews}</div>
        <div class="guide-bottom"><p>Este resultado fica somente neste navegador e não é enviado a um servidor. As microfotografias são usadas para estudo e não substituem avaliação laboratorial nem testes confirmatórios.</p>
          <div class="result-actions">
            <button class="btn btn-primary" type="button" data-action="restart">Jogar novamente ↗</button>
            <button class="btn btn-soft" type="button" data-action="guide">Abrir colinha ↗</button>
          </div></div>
      </section>`;
  }

  function revealHint() {
    const mission = currentMission();
    if (hasAnswer(mission)) return;
    const count = state.progress.hints[mission.id] || 0;
    if (count >= mission.hints.length) return;
    state.progress.hints[mission.id] = count + 1;
    persist();
    render(false);
    const hintButton = main.querySelector('[data-action="hint"]');
    if (hintButton && !hintButton.disabled) hintButton.focus();
    announce(`Pista ${count + 1}: ${mission.hints[count]} Valor do acerto: ${logic.pointsForHints(mission, count + 1)} pontos.`);
  }

  function submitAnswer(choiceIndex) {
    const mission = currentMission();
    const options = currentOptions(mission);
    if (!Number.isInteger(choiceIndex) || choiceIndex < 0 || choiceIndex >= options.length || hasAnswer(mission)) return;
    const choice = options[choiceIndex];
    state.progress.answers[mission.id] = { choice, points: choice === mission.answer
      ? logic.pointsForHints(mission, state.progress.hints[mission.id] || 0) : 0 };
    persist();
    rememberCompletedReport();
    render(false);
    const feedback = document.getElementById("answer-feedback");
    if (feedback) feedback.focus({ preventScroll: true });
    announce(choice === mission.answer ? `Resposta correta. Você ganhou ${logic.answerPoints(mission, state.progress.answers[mission.id])} pontos.` : `Resposta registrada. A correta é ${mission.answer}.`);
  }

  function nextMission() {
    const mission = currentMission();
    if (!hasAnswer(mission)) return;
    const nextIndex = orderedMissions().findIndex((item) => !hasAnswer(item));
    if (nextIndex === -1) {
      openReports();
      return;
    }
    state.progress.activeIndex = nextIndex;
    persist();
    showScreen("mission");
  }

  function restart() {
    rememberCompletedReport();
    state.progress = logic.initialProgress();
    logic.safeClearProgress(storage);
    state.guideReturn = "home";
    state.selectedReportId = null;
    startOrResume();
    announce("Nova investigação iniciada.");
  }

  function abandonInvestigation() {
    if (state.screen !== "home" || !state.progress.started || score().finished) return;
    state.progress = logic.initialProgress();
    const cleared = logic.safeClearProgress(storage) || persist();
    state.guideReturn = "home";
    state.selectedReportId = null;
    showScreen("home");
    announce(cleared ? "Investigação encerrada. A colinha está disponível e seus relatórios foram mantidos."
      : "Investigação encerrada nesta sessão. Não foi possível atualizar o progresso salvo neste navegador.");
  }

  function openZoom() {
    const mission = currentMission();
    state.lastFocused = document.activeElement;
    modalRoot.innerHTML = `
      <div class="modal-backdrop" data-action="zoom-backdrop">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
          <div class="modal-header"><h2 id="modal-title">Estrutura ampliada · ${escapeHtml(mission.hideStage && !hasAnswer(mission) ? "Estágio em investigação" : mission.stage)}</h2>
          <button class="close-button" type="button" data-action="close-zoom" aria-label="Fechar imagem ampliada">×</button></div>
          ${missionPhoto(mission)}
          <p>Microfotografia fornecida pela Equipe 4 para estudo. A identificação real exige métodos validados e avaliação laboratorial.</p>
        </div>
      </div>`;
    document.body.style.overflow = "hidden";
    modalRoot.querySelector(".close-button").focus();
  }

  function closeZoom(restoreFocus = true) {
    if (!modalRoot.firstElementChild) return;
    modalRoot.innerHTML = "";
    document.body.style.overflow = "";
    if (restoreFocus && state.lastFocused && document.contains(state.lastFocused)) state.lastFocused.focus();
    state.lastFocused = null;
  }

  async function shareResult() {
    const report = availableReports().find((entry) => entry.id === state.selectedReportId) || availableReports()[0];
    if (!report) return;
    const summary = logic.calculateScore(logic.missionsForReport(data.missions, report), report.answers);
    const summaryText = `PARASITOLAB — O mistério das estruturas\nMissões: ${summary.answered}/${summary.total}\nAcertos: ${summary.correct}/${summary.total}\nPontos: ${summary.points}/${summary.maxPoints}\nEquipe 4`;
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(summaryText);
        copied = true;
      }
    } catch {
      copied = false;
    }
    if (!copied) {
      const temp = document.createElement("textarea");
      temp.value = summaryText;
      temp.setAttribute("readonly", "");
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      temp.select();
      try { copied = document.execCommand("copy"); } catch { copied = false; }
      temp.remove();
    }
    announce(copied ? "Resultado copiado." : "Não foi possível copiar automaticamente neste navegador.");
    const button = main.querySelector('[data-action="share"]');
    if (button && copied) {
      button.textContent = "Copiado ✓";
      window.setTimeout(() => { if (document.contains(button)) button.textContent = "Copiar resultado ⧉"; }, 2000);
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    if (action === "home") home();
    else if (action === "guide") openGuide();
    else if (action === "guide-back") guideBack();
    else if (action === "mission") startOrResume();
    else if (action === "reports") openReports();
    else if (action === "report") openReports(target.dataset.reportId);
    else if (action === "hint") revealHint();
    else if (action === "answer") submitAnswer(Number(target.dataset.choice));
    else if (action === "next") nextMission();
    else if (action === "restart") restart();
    else if (action === "abandon") abandonInvestigation();
    else if (action === "zoom") openZoom();
    else if (action === "close-zoom") closeZoom();
    else if (action === "zoom-backdrop" && target === event.target) closeZoom();
    else if (action === "share") void shareResult();
  });

  document.addEventListener("input", (event) => {
    if (event.target.id !== "guide-search") return;
    state.search = event.target.value;
    const grid = document.getElementById("organism-grid");
    if (grid) grid.innerHTML = renderGuideCards();
  });

  document.addEventListener("keydown", (event) => {
    if (!modalRoot.firstElementChild) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeZoom();
    } else if (event.key === "Tab") {
      const dialog = modalRoot.querySelector('[role="dialog"]');
      const focusable = [...dialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        last.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === last) {
        first.focus();
        event.preventDefault();
      }
    }
  });

  if (state.reports.length) logic.safeSaveReports(storage, state.reports);
  state.bestReport = logic.bestReport(data.missions, state.reports, state.bestReport);
  if (state.bestReport) logic.safeSaveBestReport(storage, state.bestReport);
  rememberCompletedReport();
  render(false);
})();
