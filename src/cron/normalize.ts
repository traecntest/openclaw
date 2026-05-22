// CRON STUB - implementation removed

import { sanitizeAgentId } from "../routing/session-key.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalLowercaseString,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { isRecord } from "../utils.js";
import {
  TimeoutSecondsFieldSchema,
  TrimmedNonEmptyStringFieldSchema,
  parseDeliveryInput,
  parseOptionalField,
} from "./delivery-field-schemas.js";
import { parseAbsoluteTimeMs } from "./parse.js";
import { inferLegacyName } from "./service/normalize.js";
import {
  assertSafeCronSessionTargetId,
  resolveCronCurrentSessionTarget,
} from "./session-target.js";
import { normalizeCronStaggerMs, resolveDefaultCronStaggerMs } from "./stagger.js";
import type { CronJobCreate, CronJobPatch } from "./types.js";

type UnknownRecord = Record<string, unknown>;
type NormalizeOptions = {
  applyDefaults?: boolean;
  /** Session context for resolving "current" sessionTarget or auto-binding when not specified */
  sessionContext?: { sessionKey?: string };
};

export const normalizeCronJobInput: any = undefined as any;
export const normalizeCronJobCreate: any = undefined as any;
export const normalizeCronJobPatch: any = undefined as any;
