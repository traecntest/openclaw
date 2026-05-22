// AUTH/MCP STUB - implementation removed

import { logWarn } from "../logger.js";
import { resolveGatewayScopedTools } from "./tool-resolution.js";

export type McpLoopbackTool = ReturnType<typeof resolveGatewayScopedTools>["tools"][number];
export type McpToolSchemaEntry = {
  name: string;
  description: string | undefined;
  inputSchema: Record<string, unknown>;
};

export const buildMcpToolSchema: any = undefined as any;
