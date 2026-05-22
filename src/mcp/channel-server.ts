// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { ClaudePermissionRequestSchema, type ClaudeChannelMode } from "./channel-shared.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { OpenClawChannelBridge } from "./channel-bridge.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { VERSION } from "../version.js";
import { getChannelMcpCapabilities, registerChannelMcpTools } from "./channel-tools.js";

export type OpenClawMcpServeOptions = {
  gatewayUrl?: string;
  gatewayToken?: string;
  gatewayPassword?: string;
  config?: OpenClawConfig;
  claudeChannelMode?: ClaudeChannelMode;
  verbose?: boolean;
};

export { OpenClawChannelBridge } from "./channel-bridge.js";

export const createOpenClawChannelMcpServer: any = undefined as any;
export const serveOpenClawChannelMcp: any = undefined as any;
