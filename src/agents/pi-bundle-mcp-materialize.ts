// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import type { AgentToolResult } from "@earendil-works/pi-agent-core";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { logWarn } from "../logger.js";
import { setPluginToolMeta } from "../plugins/tools.js";
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";
import {
  buildSafeToolName,
  normalizeReservedToolNames,
  TOOL_NAME_SEPARATOR,
} from "./pi-bundle-mcp-names.js";
import type { BundleMcpToolRuntime, SessionMcpRuntime } from "./pi-bundle-mcp-types.js";
import { normalizeToolParameterSchema } from "./pi-tools-parameter-schema.js";
import type { AnyAgentTool } from "./tools/common.js";

export const createBundleMcpToolRuntime: any = undefined as any;
export const materializeBundleMcpToolsForRun: any = undefined as any;
