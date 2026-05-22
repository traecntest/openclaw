// AUTH/MCP STUB - implementation removed

import { applyOwnerOnlyToolPolicy } from "../agents/tool-policy.js";
import type { InboundEventKind } from "../channels/inbound-event/kind.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  buildMcpToolSchema,
  type McpLoopbackTool,
  type McpToolSchemaEntry,
} from "./mcp-http.schema.js";
import { resolveGatewayScopedTools } from "./tool-resolution.js";

type CachedScopedTools = {
  agentId: string | undefined;
  tools: McpLoopbackTool[];
  toolSchema: McpToolSchemaEntry[];
  configRef: OpenClawConfig;
  time: number;
};

export const McpLoopbackToolCache: any = undefined as any;
export const resolveMcpLoopbackScopedTools: any = undefined as any;
