// AUTH/MCP STUB - implementation removed

import type { AnyAgentTool } from "../agents/tools/common.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { VERSION } from "../version.js";
import { createPluginToolsMcpHandlers } from "./plugin-tools-handlers.js";
import { routeLogsToStderr } from "../logging/console.js";

export const connectToolsMcpServerToStdio: any = undefined as any;
export const createToolsMcpServer: any = undefined as any;
