// AUTH/MCP STUB - implementation removed

import { z } from "zod";
import {
  normalizeOptionalLowercaseString,
  normalizeOptionalString as toText,
} from "../shared/string-coerce.js";

export type ClaudeChannelMode = "off" | "on" | "auto";

export type ConversationDescriptor = {
  sessionKey: string;
  channel: string;
  to: string;
  accountId?: string;
  threadId?: string | number;
  label?: string;
  displayName?: string;
  derivedTitle?: string;
  lastMessagePreview?: string;
  updatedAt?: number | null;
};

type SessionRow = {
  key: string;
  channel?: string;
  lastChannel?: string;
  lastTo?: string;
  lastAccountId?: string;
  lastThreadId?: string | number;
  deliveryContext?: {
    channel?: string;
    to?: string;
    accountId?: string;
    threadId?: string | number;
  };
  origin?: {
    provider?: string;
    accountId?: string;
    threadId?: string | number;
  };
  label?: string;
  displayName?: string;
  derivedTitle?: string;
  lastMessagePreview?: string;
  updatedAt?: number | null;
};

export type SessionListResult = {
  sessions?: SessionRow[];
};

export type SessionDescribeResult = {
  session?: SessionRow | null;
};

export type ChatHistoryResult = {
  messages?: Array<{ id?: string; role?: string; content?: unknown; [key: string]: unknown }>;
};

export type SessionMessagePayload = {
  sessionKey?: string;
  messageId?: string;
  messageSeq?: number;
  message?: { role?: string; content?: unknown; [key: string]: unknown };
  lastChannel?: string;
  lastTo?: string;
  lastAccountId?: string;
  lastThreadId?: string | number;
  [key: string]: unknown;
};

export type ApprovalKind = "exec" | "plugin";
export type ApprovalDecision = "allow-once" | "allow-always" | "deny";

export type PendingApproval = {
  kind: ApprovalKind;
  id: string;
  request?: Record<string, unknown>;
  createdAtMs?: number;
  expiresAtMs?: number;
};

export type QueueEvent =
  | {
      cursor: number;
      type: "message";
      sessionKey: string;
      conversation?: ConversationDescriptor;
      messageId?: string;
      messageSeq?: number;
      role?: string;
      text?: string;
      raw: SessionMessagePayload;
    }
  | {
      cursor: number;
      type: "claude_permission_request";
      requestId: string;
      toolName: string;
      description: string;
      inputPreview: string;
      raw: unknown;
    };

export type ClaudePermissionRequest = {
  type: "claude_permission_request";
  requestId: string;
  toolName: string;
  description: string;
  inputPreview: string;
  raw: unknown;
};

export type WaitFilter = {
  sessionKey?: string;
  type?: string;
};

export { toText };

export const ClaudePermissionRequestSchema: any = undefined as any;
export const resolveMessageId: any = undefined as any;
export const summarizeResult: any = undefined as any;
export const summarizeStructuredResult: any = undefined as any;
export const toConversation: any = undefined as any;
export const matchEventFilter: any = undefined as any;
export const extractAttachmentsFromMessage: any = undefined as any;
export const normalizeApprovalId: any = undefined as any;
