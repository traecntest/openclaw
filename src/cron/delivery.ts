// CRON STUB - implementation removed

import type { OpenClawConfig } from "../config/types.js";
import { getChildLogger } from "../logging.js";
import type { CronMessageChannel } from "./types.js";

export type CronFailureDeliveryPlan = any;
export type CronFailureDestinationInput = any;
export type CronDeliveryPlan = any;

export type DeliveryTargetResolution = any;

export const resolveCronDeliveryPlan: any = undefined as any;
export const resolveFailureDestination: any = undefined as any;

export type CronAnnounceTarget = {
  channel?: string;
  to?: string;
  accountId?: string;
  sessionKey?: string;
};

export const sendCronAnnouncePayloadStrict: any = undefined as any;
export const sendFailureNotificationAnnounce: any = undefined as any;
