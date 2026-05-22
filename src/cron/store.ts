// CRON STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import { expandHomePrefix } from "../infra/home-dir.js";
import { replaceFileAtomic } from "../infra/replace-file.js";
import { resolveConfigDir } from "../utils.js";
import { parseJsonWithJson5Fallback } from "../utils/parse-json-compat.js";
import { tryCronScheduleIdentity } from "./schedule-identity.js";
import type { CronStoreFile } from "./types.js";

type SerializedStoreCacheEntry = {
  configJson?: string;
  stateJson?: string;
  needsSplitMigration: boolean;
};
type CronStateFileEntry = {
  updatedAtMs?: number;
  scheduleIdentity?: string;
  state?: Record<string, unknown>;
};
type CronStateFile = {
  version: 1;
  jobs: Record<string, CronStateFileEntry>;
};
type SaveCronStoreOptions = {
  skipBackup?: boolean;
  stateOnly?: boolean;
};

export const resolveCronStorePath: any = undefined as any;
export const loadCronStore: any = undefined as any;
export const loadCronStoreSync: any = undefined as any;
export const saveCronStore: any = undefined as any;
