// AUTH/MCP STUB - implementation removed

import type {
  ApprovalDecision,
  ApprovalKind,
  ChatHistoryResult,
  ClaudeChannelMode,
  ClaudePermissionRequest,
  ConversationDescriptor,
  PendingApproval,
  QueueEvent,
  SessionDescribeResult,
  SessionListResult,
  SessionMessagePayload,
  WaitFilter,
} from "./channel-shared.js";
import type { EventFrame } from "../gateway/protocol/index.js";
import type { GatewayClient } from "../gateway/client.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalLowercaseString,
} from "../shared/string-coerce.js";
import { VERSION } from "../version.js";
import { extractFirstTextBlock } from "../shared/chat-message-content.js";
import { matchEventFilter, normalizeApprovalId, toConversation, toText } from "./channel-shared.js";
import { randomUUID } from "node:crypto";

type PendingWaiter = {
  filter: WaitFilter;
  resolve: (value: QueueEvent | null) => void;
  timeout: NodeJS.Timeout | null;
};
type ServerNotification = {
  method: string;
  params?: Record<string, unknown>;
};

export const OpenClawChannelBridge: any = undefined as any;
export const shouldRetryInitialMcpGatewayConnect: any = undefined as any;
