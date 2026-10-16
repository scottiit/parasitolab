(function (global) {
  "use strict";

  const STORAGE_KEY = "parasitolab-equipe4-progress-v2";
  const REPORTS_KEY = "parasitolab-equipe4-reports-v1";
  const BEST_REPORT_KEY = "parasitolab-equipe4-best-report-v1";
  const HINT_PENALTY = 25;
  const QUESTIONS_PER_GAME = 10;

  function initialProgress() {
    return { activeIndex: 0, answers: {}, hints: {}, started: false, startedAt: null };
  }

  function shuffled(values, random = Math.random) {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function newGameProgress(missions, random = Math.random) {
    const selected = shuffled(missions, random).slice(0, QUESTIONS_PER_GAME);
    return {
      ...initialProgress(),
      missionOrder: selected.map(mission => mission.id),
      optionOrders: Object.fromEntries(selected.map(mission =>
        [mission.id, drawOptions(mission, random)]))
    };
  }

  function validMissionSelection(value, catalogIds) {
    return Array.isArray(value) &&
      (value.length === Math.min(QUESTIONS_PER_GAME, catalogIds.length) || value.length === catalogIds.length) &&
      new Set(value).size === value.length && value.every(id => catalogIds.includes(id));
  }

  function optionPool(mission) {
    return [...new Set([mission.answer, ...mission.options, ...(mission.optionPool || [])])];
  }

  function drawOptions(mission, random = Math.random) {
    const distractors = shuffled(optionPool(mission).filter(option => option !== mission.answer), random).slice(0, 3);
    return shuffled([mission.answer, ...distractors], random);
  }

  function validOptions(options, mission) {
    const pool = optionPool(mission);
    return Array.isArray(options) && options.length === 4 && new Set(options).size === 4 &&
      options.includes(mission.answer) && options.every(option => pool.includes(option));
  }

  function normalizeAnswer(mission, answer) {
    const normalized = { choice: answer.choice };
    if ([0, 50, 75, 100].includes(answer.points)) {
      normalized.points = answer.choice === mission.answer ? answer.points : 0;
    }
    return normalized;
  }

  function pointsForHints(mission, count = 0) {
    const used = Number.isInteger(count) ? Math.min(Math.max(count, 0), mission.hints.length) : 0;
    return Math.max(0, 100 - used * HINT_PENALTY);
  }

  function answerPoints(mission, answer) {
    if (!answer || answer.choice !== mission.answer) return 0;
    return [0, 50, 75, 100].includes(answer.points) ? answer.points : 100;
  }

  function safeLoadProgress(storage, missions) {
    try {
      const source = storage.getItem(STORAGE_KEY);
      if (!source) return initialProgress();
      const decoded = JSON.parse(source);
      if (!decoded || typeof decoded !== "object") return initialProgress();
      const ids = missions.map(mission => mission.id);
      const legacyIds = ids.slice(0, 10);
      const fallbackIds = ids.some(id => !legacyIds.includes(id) && decoded.answers && Object.hasOwn(decoded.answers, id))
        ? ids : legacyIds;
      const missionOrder = validMissionSelection(decoded.missionOrder, ids)
        ? [...decoded.missionOrder] : fallbackIds;
      const gameMissions = missions.filter(mission => missionOrder.includes(mission.id));
      const optionOrders = Object.fromEntries(gameMissions.map(mission => {
        const options = decoded.optionOrders && decoded.optionOrders[mission.id];
        if (validOptions(options, mission)) return [mission.id, [...options]];
        const prior = Array.isArray(options) ? [...new Set(options)].filter(option => optionPool(mission).includes(option)) : [];
        const migrated = prior.includes(mission.answer) && prior.length === 3
          ? [...prior, shuffled(optionPool(mission).filter(option => !prior.includes(option)))[0]] : drawOptions(mission);
        return [mission.id, migrated];
      }));
      const answers = {};
      const hints = {};
      for (const mission of gameMissions) {
        const answer = decoded.answers && decoded.answers[mission.id];
        if (
          answer &&
          typeof answer.choice === "string" &&
          optionPool(mission).includes(answer.choice)
        ) {
          answers[mission.id] = normalizeAnswer(mission, answer);
        }
        const count = decoded.hints && decoded.hints[mission.id];
        if (Number.isInteger(count) && count >= 0) {
          hints[mission.id] = Math.min(count, mission.hints.length);
        }
      }
      let activeIndex = Number.isInteger(decoded.activeIndex) ? decoded.activeIndex : 0;
      activeIndex = Math.min(Math.max(activeIndex, 0), Math.max(0, missionOrder.length - 1));
      const allAnswered = missionOrder.every((id) => Object.hasOwn(answers, id));
      if (!allAnswered && Object.hasOwn(answers, missionOrder[activeIndex])) {
        const next = missionOrder.findIndex((id) => !Object.hasOwn(answers, id));
        if (next >= 0) activeIndex = next;
      }
      const started = decoded.started === true || Object.keys(answers).length > 0 ||
        Object.values(hints).some((count) => count > 0) || activeIndex > 0;
      const reportId = typeof decoded.reportId === "string" && decoded.reportId.length <= 100
        ? decoded.reportId : null;
      const startedAt = Number.isSafeInteger(decoded.startedAt) && decoded.startedAt > 0
        ? decoded.startedAt : null;
      return { activeIndex, answers, hints, started, reportId, startedAt, missionOrder, optionOrders };
    } catch {
      return initialProgress();
    }
  }

  function safeSaveProgress(storage, progress) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return true;
    } catch {
      return false;
    }
  }

  function safeClearProgress(storage) {
    try {
      storage.removeItem(STORAGE_KEY);
      return true;
    } catch {
      return false;
    }
  }

  function calculateScore(missions, answers) {
    const total = missions.length;
    const answered = missions.filter((mission) => Object.hasOwn(answers, mission.id)).length;
    const correct = missions.filter(
      (mission) => answers[mission.id] && answers[mission.id].choice === mission.answer
    ).length;
    return {
      total,
      answered,
      correct,
      points: missions.reduce((points, mission) => points + answerPoints(mission, answers[mission.id]), 0),
      maxPoints: total * 100,
      percentage: total ? Math.round((correct / total) * 100) : 0,
      finished: answered === total && total > 0
    };
  }

  function safeLoadReports(storage, missions, key = REPORTS_KEY) {
    try {
      const decoded = JSON.parse(storage.getItem(key));
      if (!Array.isArray(decoded)) return [];
      if (decoded.every((entry) => entry && typeof entry.completedAt === "string")) {
        decoded.sort((a, b) => Date.parse(b.completedAt) - Date.parse(a.completedAt));
      }
      const reports = [];
      const ids = new Set();
      for (const entry of decoded) {
        if (!entry || typeof entry.id !== "string" || !entry.id || entry.id.length > 100 ||
          ids.has(entry.id)) continue;
        const legacy = typeof entry.completedAt === "string" && Number.isFinite(Date.parse(entry.completedAt));
        const validDuration = entry.durationMs === null ||
          (Number.isSafeInteger(entry.durationMs) && entry.durationMs >= 0);
        if (!validDuration && !legacy) continue;
        const answers = {};
        for (const mission of missions) {
          const choice = entry.answers && entry.answers[mission.id] && entry.answers[mission.id].choice;
          if (optionPool(mission).includes(choice)) answers[mission.id] = normalizeAnswer(mission, entry.answers[mission.id]);
        }
        const allIds = missions.map(mission => mission.id);
        const legacyIds = allIds.slice(0, 10);
        let missionIds;
        if (validMissionSelection(entry.missionIds, allIds)) missionIds = [...entry.missionIds];
        else if (entry.missionIds !== undefined) continue;
        else missionIds = calculateScore(missions, answers).finished ? allIds : legacyIds;
        const reportMissions = missions.filter(mission => missionIds.includes(mission.id));
        if (!calculateScore(reportMissions, answers).finished) continue;
        ids.add(entry.id);
        reports.push({ id: entry.id, durationMs: validDuration ? entry.durationMs : null, answers, missionIds });
      }
      return reports.slice(0, 10);
    } catch {
      return [];
    }
  }

  function safeSaveReports(storage, reports, key = REPORTS_KEY) {
    try {
      storage.setItem(key, JSON.stringify(reports.slice(0, 10)));
      return true;
    } catch {
      return false;
    }
  }

  function bestReport(missions, reports, previous = null) {
    return reports.reduce((best, report) => {
      if (!best) return report;
      const points = calculateScore(missionsForReport(missions, report), report.answers).points;
      const bestPoints = calculateScore(missionsForReport(missions, best), best.answers).points;
      const time = report.durationMs === null ? Infinity : report.durationMs;
      const bestTime = best.durationMs === null ? Infinity : best.durationMs;
      return points > bestPoints || (points === bestPoints && time < bestTime) ? report : best;
    }, previous);
  }

  function missionsForReport(missions, report) {
    return report.missionIds ? report.missionIds.map(id => missions.find(mission => mission.id === id)) : missions;
  }

  function safeLoadBestReport(storage, missions) {
    return safeLoadReports(storage, missions, BEST_REPORT_KEY)[0] || null;
  }

  function safeSaveBestReport(storage, report) {
    return safeSaveReports(storage, report ? [report] : [], BEST_REPORT_KEY);
  }

  const logic = Object.freeze({
    STORAGE_KEY,
    REPORTS_KEY,
    BEST_REPORT_KEY,
    HINT_PENALTY,
    QUESTIONS_PER_GAME,
    initialProgress,
    newGameProgress,
    drawOptions,
    optionPool,
    pointsForHints,
    answerPoints,
    safeLoadProgress,
    safeSaveProgress,
    safeClearProgress,
    calculateScore,
    safeLoadReports,
    safeSaveReports,
    bestReport,
    missionsForReport,
    safeLoadBestReport,
    safeSaveBestReport
  });

  global.ParasitoLogic = logic;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = logic;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
