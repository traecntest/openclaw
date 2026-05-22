// AUTH/MCP STUB - implementation removed

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { OpenClawChannelBridge } from "./channel-bridge.js";
import {
  extractAttachmentsFromMessage,
  resolveMessageId,
  summarizeResult,
  summarizeStructuredResult,
  toText,
} from "./channel-shared.js";
import { z } from "zod";

export const getChannelMcpCapabilities: any = undefined as any;
export const registerChannelMcpTools: any = undefined as any;
