// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import type {
  JsonSchemaType,
  JsonSchemaValidator,
  jsonSchemaValidator,
} from "@modelcontextprotocol/sdk/validation/types.js";
import type {
  McpCatalogTool,
  McpServerCatalog,
  McpToolCatalog,
  SessionMcpRuntime,
  SessionMcpRuntimeManager,
} from "./pi-bundle-mcp-types.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { ErrorObject, ValidateFunction } from "ajv";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { AjvJsonSchemaValidator } from "@modelcontextprotocol/sdk/validation/ajv-provider.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { createRequire } from "node:module";
import { isMcpConfigRecord } from "./mcp-config-shared.js";
import { loadEmbeddedPiMcpConfig } from "./embedded-pi-mcp.js";
import { logWarn } from "../logger.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { redactSensitiveUrlLikeString } from "../shared/net/redact-sensitive-url.js";
import { resolveGlobalSingleton } from "../shared/global-singleton.js";
import { resolveMcpTransport } from "./mcp-transport.js";
import { sanitizeServerName } from "./pi-bundle-mcp-names.js";

type Ajv2020Like = {
  compile: (schema: JsonSchemaType) => ValidateFunction;
  errorsText: (errors?: ErrorObject[] | null) => string;
};
type BundleMcpSession = {
  serverName: string;
  client: Client;
  transport: Transport;
  transportType: "stdio" | "sse" | "streamable-http";
  detachStderr?: () => void;
};
type CreateSessionMcpRuntime = (
  params: Parameters<typeof createSessionMcpRuntime>[0] & { configFingerprint?: string },
) => SessionMcpRuntime;
type ListedTool = Awaited<ReturnType<Client["listTools"]>>["tools"][number];
type LoadedMcpConfig = ReturnType<typeof loadEmbeddedPiMcpConfig>;

export { testing as __testing };


export const createBundleMcpJsonSchemaValidator: any = undefined as any;
export const createSessionMcpRuntime: any = undefined as any;
export const disposeAllSessionMcpRuntimes: any = undefined as any;
export const disposeSessionMcpRuntime: any = undefined as any;
export const getOrCreateSessionMcpRuntime: any = undefined as any;
export const getSessionMcpRuntimeManager: any = undefined as any;
export const retireSessionMcpRuntime: any = undefined as any;
export const retireSessionMcpRuntimeForSessionKey: any = undefined as any;
export const testing: any = undefined as any;
