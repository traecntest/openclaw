// CRON STUB - implementation removed

import fsSync from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { parseByteSize } from "../cli/parse-bytes.js";
import type { CronConfig } from "../config/types.cron.js";
import { appendRegularFile, isPathInside, pathExists, root as fsRoot } from "../infra/fs-safe.js";
import { privateFileStore } from "../infra/private-file-store.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
  normalizeStringifiedOptionalString,
} from "../shared/string-coerce.js";
import { normalizeCronRunDiagnostics } from "./run-diagnostics.js";
import type {
  CronDeliveryStatus,
  CronDeliveryTrace,
  CronFailureNotificationDelivery,
  CronRunDiagnostics,
  CronRunStatus,
  CronRunTelemetry,
} from "./types.js";

export type CronRunLogEntry = {
  ts: number;
  jobId: string;
  action: "finished";
  status?: CronRunStatus;
  error?: string;
  summary?: string;
  diagnostics?: CronRunDiagnostics;
  delivered?: boolean;
  deliveryStatus?: CronDeliveryStatus;
  deliveryError?: string;
  failureNotificationDelivery?: CronFailureNotificationDelivery;
  delivery?: CronDeliveryTrace;
  sessionId?: string;
  sessionKey?: string;
  runId?: string;
  runAtMs?: number;
  durationMs?: number;
  nextRunAtMs?: number;
} & CronRunTelemetry;
type CronRunLogSortDir = "asc" | "desc";
type CronRunLogStatusFilter = "all" | "ok" | "error" | "skipped";
type ReadCronRunLogPageOptions = {
  limit?: number;
  offset?: number;
  jobId?: string;
  runId?: string;
  status?: CronRunLogStatusFilter;
  statuses?: CronRunStatus[];
  deliveryStatus?: CronDeliveryStatus;
  deliveryStatuses?: CronDeliveryStatus[];
  query?: string;
  sortDir?: CronRunLogSortDir;
};
type CronRunLogPageResult = {
  entries: CronRunLogEntry[];
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
  nextOffset: number | null;
};
type ReadCronRunLogAllPageOptions = Omit<ReadCronRunLogPageOptions, "jobId"> & {
  storePath: string;
  jobNameById?: Record<string, string>;
};

export const resolveCronRunLogPath: any = undefined as any;
export const DEFAULT_CRON_RUN_LOG_MAX_BYTES: any = undefined as any;
export const DEFAULT_CRON_RUN_LOG_KEEP_LINES: any = undefined as any;
export const resolveCronRunLogPruneOptions: any = undefined as any;
export const getPendingCronRunLogWriteCountForTests: any = undefined as any;
export const appendCronRunLog: any = undefined as any;
export const readCronRunLogEntries: any = undefined as any;
export const readCronRunLogEntriesSync: any = undefined as any;
export const readCronRunLogEntriesPage: any = undefined as any;
export const readCronRunLogEntriesPageAll: any = undefined as any;
