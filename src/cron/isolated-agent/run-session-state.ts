// CRON STUB - implementation removed

import type { LiveSessionModelSelection } from "../../agents/live-model-switch.js";
import type { SessionEntry } from "../../config/sessions.js";
import type { resolveCronSession } from "./session.js";

export type MutableCronSessionEntry = SessionEntry;
export type MutableCronSession = ReturnType<typeof resolveCronSession> & {
  store: Record<string, SessionEntry>;
  sessionEntry: MutableCronSessionEntry;
};
export type CronLiveSelection = LiveSessionModelSelection;

export type PersistCronSessionEntry = () => Promise<void>;

export const createPersistCronSessionEntry: any = undefined as any;
export const adoptCronRunSessionMetadata: any = undefined as any;
export const persistCronSkillsSnapshotIfChanged: any = undefined as any;
export const markCronSessionPreRun: any = undefined as any;
export const syncCronSessionLiveSelection: any = undefined as any;
