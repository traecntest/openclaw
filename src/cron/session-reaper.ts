// CRON STUB - implementation removed

import { parseDurationMs } from "../cli/parse-duration.js";
import { loadSessionStore } from "../config/sessions/store-load.js";
import { archiveRemovedSessionTranscripts, updateSessionStore } from "../config/sessions/store.js";
import type { CronConfig } from "../config/types.cron.js";
import { cleanupArchivedSessionTranscripts } from "../gateway/session-utils.fs.js";
import { isCronRunSessionKey } from "../sessions/session-key-utils.js";
import type { Logger } from "./service/state.js";

type ReaperResult = {
  swept: boolean;
  pruned: number;
};

export const resolveRetentionMs: any = undefined as any;
export const sweepCronRunSessions: any = undefined as any;
export const resetReaperThrottle: any = undefined as any;
