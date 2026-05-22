// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import type { AgentToolResult } from "@earendil-works/pi-agent-core";
import type { AnyAgentTool } from "./tools/common.js";
import type { BundleMcpToolRuntime, SessionMcpRuntime } from "./pi-bundle-mcp-types.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  buildSafeToolName,
  normalizeReservedToolNames,
  TOOL_NAME_SEPARATOR,
} from "./pi-bundle-mcp-names.js";
import { logWarn } from "../logger.js";
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";
import { normalizeToolParameterSchema } from "./pi-tools-parameter-schema.js";
import { setPluginToolMeta } from "../plugins/tools.js";

export const createBundleMcpToolRuntime: any = undefined as any;
export const materializeBundleMcpToolsForRun: any = undefined as any;
