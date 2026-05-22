// CRON STUB - implementation removed

import { enqueueCommandInLane } from "../../process/command-queue.js";
import { CommandLane } from "../../process/lanes.js";
import { DEFAULT_AGENT_ID } from "../../routing/session-key.js";
import { normalizeLowercaseStringOrEmpty } from "../../shared/string-coerce.js";
import {
  completeTaskRunByRunId,
  createRunningTaskRun,
  failTaskRunByRunId,
} from "../../tasks/detached-task-runtime.js";
import { clearCronJobActive, markCronJobActive } from "../active-jobs.js";
import { resolveCronDeliveryPlan, resolveFailureDestination } from "../delivery-plan.js";
import { createCronRunDiagnosticsFromError } from "../run-diagnostics.js";
import { createCronExecutionId } from "../run-id.js";
import type { CronJob, CronJobCreate, CronJobPatch } from "../types.js";
import {
  applyJobPatch,
  assertSupportedJobSpec,
  computeJobNextRunAtMs,
  createJob,
  findJobOrThrow,
  hasScheduledNextRunAtMs,
  isJobEnabled,
  isJobDue,
  nextWakeAtMs,
  recomputeNextRuns,
  recomputeNextRunsForMaintenance,
} from "./jobs.js";
import type {
  CronJobsEnabledFilter,
  CronJobsSortBy,
  CronListPageOptions,
  CronListPageResult,
  CronSortDir,
} from "./list-page-types.js";
import { locked } from "./locked.js";
import { normalizeOptionalAgentId } from "./normalize.js";
import type { CronServiceState, CronWakeMode } from "./state.js";
import { ensureLoaded, persist, warnIfDisabled } from "./store.js";
import {
  applyJobResult,
  armTimer,
  emit,
  executeJobCoreWithTimeout,
  failureNotificationDeliveryFromJobState,
  normalizeCronRunErrorText,
  runMissedJobs,
  stopTimer,
  wake,
} from "./timer.js";

type InterruptedStartupRun = {
  jobId: string;
  runAtMs: number;
  durationMs: number;
};
type PreparedManualRun =
  | {
      ok: true;
      ran: false;
      reason: "already-running" | "not-due" | "invalid-spec";
    }
type ManualRunDisposition =
  | Extract<PreparedManualRun, { ran: false }>
type ManualRunPreflightResult =
  | { ok: false }

export const start: any = undefined as any;
export const stop: any = undefined as any;
export const status: any = undefined as any;
export const list: any = undefined as any;
export const readJob: any = undefined as any;
export const listPage: any = undefined as any;
export const add: any = undefined as any;
export const update: any = undefined as any;
export const remove: any = undefined as any;
export const run: any = undefined as any;
export const enqueueRun: any = undefined as any;
export const wakeNow: any = undefined as any;
