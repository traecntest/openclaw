// AUTH/MCP STUB - implementation removed

import type { AnyAgentTool } from "../agents/tools/common.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  collectExplicitAllowlist,
  collectExplicitDenylist,
  mergeAlsoAllowPolicy,
  resolveToolProfilePolicy,
} from "../agents/tool-policy.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { connectToolsMcpServerToStdio, createToolsMcpServer } from "./tools-stdio-server.js";
import { ensureStandalonePluginToolRegistryLoaded, resolvePluginTools } from "../plugins/tools.js";
import { formatErrorMessage } from "../infra/errors.js";
import { getRuntimeConfig } from "../config/config.js";
import { pathToFileURL } from "node:url";
import { pickSandboxToolPolicy } from "../agents/sandbox-tool-policy.js";
import { routeLogsToStderr } from "../logging/console.js";

export const createPluginToolsMcpServer: any = undefined as any;
export const servePluginToolsMcp: any = undefined as any;
