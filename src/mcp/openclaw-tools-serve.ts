// AUTH/MCP STUB - implementation removed

import type { AnyAgentTool } from "../agents/tools/common.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { connectToolsMcpServerToStdio, createToolsMcpServer } from "./tools-stdio-server.js";
import { createCronTool } from "../agents/tools/cron-tool.js";
import { formatErrorMessage } from "../infra/errors.js";
import { pathToFileURL } from "node:url";

export const resolveOpenClawToolsForMcp: any = undefined as any;
