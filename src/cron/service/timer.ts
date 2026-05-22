// CRON STUB - implementation removed

import { resolveFailoverReasonFromError } from "../../agents/failover-error.js";
import { formatEmbeddedAgentExecutionPhase } from "../../agents/pi-embedded-runner/execution-phase.js";
import type { CronConfig, CronRetryOn } from "../../config/types.cron.js";
import type { HeartbeatRunResult } from "../../infra/heartbeat-wake.js";
import {
  HEARTBEAT_SKIP_CRON_IN_PROGRESS,
  isRetryableHeartbeatBusySkipReason,
} from "../../infra/heartbeat-wake.js";
import { loadSessionStore } from "../../config/sessions/store-load.js";
import {
  DEFAULT_AGENT_ID,
  isSubagentSessionKey,
  normalizeAgentId,
  resolveAgentIdFromSessionKey,
} from "../../routing/session-key.js";
import { normalizeOptionalLowercaseString } from "../../shared/string-coerce.js";
import {
  completeTaskRunByRunId,
  createRunningTaskRun,
  failTaskRunByRunId,
} from "../../tasks/detached-task-runtime.js";
import { deliveryContextFromSession } from "../../utils/delivery-context.shared.js";
import type { DeliveryContext } from "../../utils/delivery-context.types.js";
import { clearCronJobActive, markCronJobActive } from "../active-jobs.js";
import { resolveCronDeliveryPlan, resolveFailureDestination } from "../delivery-plan.js";
import { resolveCronAgentSessionKey } from "../isolated-agent/session-key.js";
import {
  createCronRunDiagnosticsFromError,
  normalizeCronRunDiagnostics,
  summarizeCronRunDiagnostics,
} from "../run-diagnostics.js";
import { createCronExecutionId } from "../run-id.js";
import { sweepCronRunSessions } from "../session-reaper.js";
import type {
  CronAgentExecutionPhase,
  CronAgentExecutionPhaseUpdate,
  CronAgentExecutionStarted,
  CronDeliveryStatus,
  CronDeliveryTrace,
  CronFailureNotificationDelivery,
  CronJob,
  CronMessageChannel,
  CronRunOutcome,
  CronRunStatus,
  CronRunTelemetry,
} from "../types.js";
import {
  DEFAULT_ERROR_BACKOFF_SCHEDULE_MS,
  computeJobPreviousRunAtMs,
  computeJobNextRunAtMs,
  errorBackoffMs,
  hasScheduledNextRunAtMs,
  isJobEnabled,
  nextWakeAtMs,
  recomputeNextRunsForMaintenance,
  recordScheduleComputeError,
  resolveJobPayloadTextForMain,
} from "./jobs.js";
import { locked } from "./locked.js";
import type { CronEvent, CronServiceState } from "./state.js";
import { ensureLoaded, persist } from "./store.js";
import { resolveCronJobTimeoutMs } from "./timeout-policy.js";

type ResolvedFailureAlert = {
  after: number;
  cooldownMs: number;
  channel: CronMessageChannel;
  to?: string;
  mode?: "announce" | "webhook";
  accountId?: string;
  includeSkipped: boolean;
};
type TimedCronRunOutcome = CronRunOutcome &
  CronRunTelemetry & {
    jobId: string;
    job: CronJob;
    taskRunId?: string;
    delivered?: boolean;
    deliveryAttempted?: boolean;
    startedAt: number;
    endedAt: number;
  };
type StartupCatchupCandidate = {
  jobId: string;
  job: CronJob;
};
type StartupDeferredJob = {
  jobId: string;
  delayMs?: number;
};
type StartupCatchupPlan = {
  candidates: StartupCatchupCandidate[];
  deferredJobs: StartupDeferredJob[];
};
type CronAgentWatchdogState =
  | "waiting_for_runner"
type CronAgentPhaseWatchdogStage = "pre_execution" | "execution";
type CronAgentWatchdog = {
  start: () => void;
  noteRunnerStarted: (info?: CronAgentExecutionStarted) => void;
  notePhase: (info: CronAgentExecutionPhaseUpdate) => void;
  activeExecution: () => CronAgentExecutionStarted | undefined;
  dispose: () => void;
};

export { DEFAULT_JOB_TIMEOUT_MS } from "./timeout-policy.js";

export const executeJobCoreWithTimeout: any = undefined as any;
export const normalizeCronRunErrorText: any = undefined as any;
export const failureNotificationDeliveryFromJobState: any = undefined as any;
export const applyJobResult: any = undefined as any;
export const armTimer: any = undefined as any;
export const onTimer: any = undefined as any;
export const runMissedJobs: any = undefined as any;
export const executeJobCore: any = undefined as any;
export const executeJob: any = undefined as any;
export const wake: any = undefined as any;
export const stopTimer: any = undefined as any;
export const emit: any = undefined as any;
