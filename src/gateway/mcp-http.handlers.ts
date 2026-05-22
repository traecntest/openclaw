// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import type { McpLoopbackTool, McpToolSchemaEntry } from "./mcp-http.schema.js";
import {
  MCP_LOOPBACK_SERVER_NAME,
  MCP_LOOPBACK_SERVER_VERSION,
  MCP_LOOPBACK_SUPPORTED_PROTOCOL_VERSIONS,
  jsonRpcError,
  jsonRpcResult,
  type JsonRpcRequest,
} from "./mcp-http.protocol.js";
import { formatErrorMessage } from "../infra/errors.js";
import { runBeforeToolCallHook, type HookContext } from "../agents/pi-tools.before-tool-call.js";

type McpTextContent = {
  type: "text";
  text: string;
};

export const handleMcpJsonRpc: any = undefined as any;
