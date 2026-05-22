// CRON STUB - implementation removed

import { z, type ZodType } from "zod";
import { normalizeOptionalLowercaseString } from "../shared/string-coerce.js";

type ParsedDeliveryInput = {
  mode?: "announce" | "none" | "webhook";
  channel?: string;
  to?: string;
  threadId?: string | number;
  accountId?: string;
};

export const LowercaseNonEmptyStringFieldSchema: any = undefined as any;
export const TrimmedNonEmptyStringFieldSchema: any = undefined as any;
export const DeliveryThreadIdFieldSchema: any = undefined as any;
export const TimeoutSecondsFieldSchema: any = undefined as any;
export const parseDeliveryInput: any = undefined as any;
export const parseOptionalField: any = undefined as any;
