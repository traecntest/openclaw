// CRON STUB - implementation removed

import { hasOutboundReplyContent } from "openclaw/plugin-sdk/reply-payload";
import { stripHeartbeatToken } from "../auto-reply/heartbeat.js";

type HeartbeatDeliveryPayload = {
  text?: string;
  mediaUrl?: string;
  mediaUrls?: string[];
  presentation?: unknown;
  interactive?: unknown;
  channelData?: unknown;
};

export const shouldSkipHeartbeatOnlyDelivery: any = undefined as any;
export const shouldEnqueueCronMainSummary: any = undefined as any;
