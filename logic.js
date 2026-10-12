(function (global) {
  "use strict";

  const STORAGE_KEY = "parasitolab-equipe4-progress-v2";
  const REPORTS_KEY = "parasitolab-equipe4-reports-v1";
  const BEST_REPORT_KEY = "parasitolab-equipe4-best-report-v1";

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
    return {
      ...initialProgress(),
      missionOrder: shuffled(missions.map(mission => mission.id), random),
      optionOrders: Object.fromEntries(missions.map(mission =>
        [mission.id, shuffled(mission.options, random)]))
    };
  }

  function validOrder(value, expected) {
    return Array.isArray(value) && value.length === expected.length &&
      new Set(value).size === expected.length && value.every(item => expected.includes(item));
  }

  function safeLoadProgress(storage, missions) {
    try {
      const source = storage.getItem(STORAGE_KEY);
      if (!source) return initialProgress();
      const decoded = JSON.parse(source);
      if (!decoded || typeof decoded !== "object") return initialProgress();
      const ids = missions.map(mission => mission.id);
      const missionOrder = validOrder(decoded.missionOrder, ids) ? [...decoded.missionOrder] : ids;
      const optionOrders = Object.fromEntries(missions.map(mission => {
        const options = decoded.optionOrders && decoded.optionOrders[mission.id];
        return [mission.id, validOrder(options, mission.options) ? [...options] : [...mission.options]];
      }));
      const answers = {};
      const hints = {};
      for (const mission of missions) {
        const answer = decoded.answers && decoded.answers[mission.id];
        if (
          answer &&
          typeof answer.choice === "string" &&
          mission.options.includes(answer.choice)
        ) {
          answers[mission.id] = { choice: answer.choice };
        }
        const count = decoded.hints && decoded.hints[mission.id];
        if (Number.isInteger(count) && count >= 0) {
          hints[mission.id] = Math.min(count, mission.hints.length);
        }
      }
      let activeIndex = Number.isInteger(decoded.activeIndex) ? decoded.activeIndex : 0;
      activeIndex = Math.min(Math.max(activeIndex, 0), Math.max(0, missions.length - 1));
      const allAnswered = missions.every((mission) => Object.hasOwn(answers, mission.id));
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
      points: correct * 100,
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
          if (mission.options.includes(choice)) answers[mission.id] = { choice };
        }
        if (!calculateScore(missions, answers).finished) continue;
        ids.add(entry.id);
        reports.push({ id: entry.id, durationMs: validDuration ? entry.durationMs : null, answers });
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
      const points = calculateScore(missions, report.answers).points;
      const bestPoints = calculateScore(missions, best.answers).points;
      const time = report.durationMs === null ? Infinity : report.durationMs;
      const bestTime = best.durationMs === null ? Infinity : best.durationMs;
      return points > bestPoints || (points === bestPoints && time < bestTime) ? report : best;
    }, previous);
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
    initialProgress,
    newGameProgress,
    safeLoadProgress,
    safeSaveProgress,
    safeClearProgress,
    calculateScore,
    safeLoadReports,
    safeSaveReports,
    bestReport,
    safeLoadBestReport,
    safeSaveBestReport
  });

  global.ParasitoLogic = logic;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = logic;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
