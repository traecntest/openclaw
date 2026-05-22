// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import {
  clearActiveMcpLoopbackRuntimeByOwnerToken,
  setActiveMcpLoopbackRuntime,
} from "./mcp-http.loopback-runtime.js";
import {
  createServer as createHttpServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";
import {
  readMcpHttpBody,
  resolveMcpRequestContext,
  validateMcpLoopbackRequest,
} from "./mcp-http.request.js";
import { McpLoopbackToolCache } from "./mcp-http.runtime.js";
import { formatErrorMessage } from "../infra/errors.js";
import { getRuntimeConfig } from "../config/io.js";
import { handleMcpJsonRpc } from "./mcp-http.handlers.js";
import { isTruthyEnvValue } from "../infra/env.js";
import { jsonRpcError, type JsonRpcRequest } from "./mcp-http.protocol.js";
import { logDebug, logWarn } from "../logger.js";

type McpLoopbackServer = {
  port: number;
  close: () => Promise<void>;
};

export {
  createMcpLoopbackServerConfig,
  getActiveMcpLoopbackRuntime,
  resolveMcpLoopbackBearerToken,
} from "./mcp-http.loopback-runtime.js";

export const closeMcpLoopbackServer: any = undefined as any;
export const ensureMcpLoopbackServer: any = undefined as any;
export const startMcpLoopbackServer: any = undefined as any;
