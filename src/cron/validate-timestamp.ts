// CRON STUB - implementation removed

import { normalizeOptionalString } from "../shared/string-coerce.js";
import { parseAbsoluteTimeMs } from "./parse.js";
import type { CronSchedule } from "./types.js";

type TimestampValidationError = {
  ok: false;
  message: string;
};
type TimestampValidationSuccess = {
  ok: true;
};
type TimestampValidationResult = TimestampValidationSuccess | TimestampValidationError;

export const validateScheduleTimestamp: any = undefined as any;
