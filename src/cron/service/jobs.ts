// CRON STUB - implementation removed

import crypto from "node:crypto";
import { normalizeAgentId } from "../../routing/session-key.js";
import {
  normalizeOptionalString,
  normalizeOptionalThreadValue,
} from "../../shared/string-coerce.js";
import { parseAbsoluteTimeMs } from "../parse.js";
import {
  coerceFiniteScheduleNumber,
  computeNextRunAtMs,
  computePreviousRunAtMs,
} from "../schedule.js";
import { assertSafeCronSessionTargetId } from "../session-target.js";
import {
  normalizeCronStaggerMs,
  resolveCronStaggerMs,
  resolveDefaultCronStaggerMs,
} from "../stagger.js";
import type {
  CronDelivery,
  CronDeliveryPatch,
  CronFailureAlert,
  CronJob,
  CronJobCreate,
  CronJobPatch,
  CronPayload,
  CronPayloadPatch,
} from "../types.js";
import { normalizeHttpWebhookUrl } from "../webhook-url.js";
import { resolveInitialCronDelivery } from "./initial-delivery.js";
import {
  normalizeOptionalAgentId,
  normalizePayloadToSystemText,
  normalizeRequiredName,
} from "./normalize.js";
import type { CronServiceState } from "./state.js";

export const DEFAULT_ERROR_BACKOFF_SCHEDULE_MS: any = undefined as any;
export const hasScheduledNextRunAtMs: any = undefined as any;
export const errorBackoffMs: any = undefined as any;
export const assertSupportedJobSpec: any = undefined as any;
export const findJobOrThrow: any = undefined as any;
export const isJobEnabled: any = undefined as any;
export const computeJobNextRunAtMs: any = undefined as any;
export const computeJobPreviousRunAtMs: any = undefined as any;
export const recordScheduleComputeError: any = undefined as any;
export const recomputeNextRuns: any = undefined as any;
export const recomputeNextRunsForMaintenance: any = undefined as any;
export const nextWakeAtMs: any = undefined as any;
export const createJob: any = undefined as any;
export const applyJobPatch: any = undefined as any;
export const isJobDue: any = undefined as any;
export const resolveJobPayloadTextForMain: any = undefined as any;
