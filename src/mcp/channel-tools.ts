// AUTH/MCP STUB - implementation removed

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { OpenClawChannelBridge } from "./channel-bridge.js";
import {
  extractAttachmentsFromMessage,
  resolveMessageId,
  summarizeResult,
  summarizeStructuredResult,
  toText,
} from "./channel-shared.js";

export const getChannelMcpCapabilities: any = undefined as any;
export const registerChannelMcpTools: any = undefined as any;
