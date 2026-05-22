// AUTH/MCP STUB - implementation removed

import type { FetchLike, Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import {
  SSEClientTransport,
  type SSEClientTransportOptions,
} from "@modelcontextprotocol/sdk/client/sse.js";
import { OpenClawStdioClientTransport } from "./mcp-stdio-transport.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { loadUndiciRuntimeDeps } from "../infra/net/undici-runtime.js";
import { logDebug } from "../logger.js";
import { normalizeHeadersInitForFetch } from "../infra/fetch-headers.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { resolveMcpTransportConfig } from "./mcp-transport-config.js";
import { retainSafeHeadersForCrossOriginRedirect } from "../infra/net/redirect-headers.js";

type ResolvedMcpTransport = {
  transport: Transport;
  description: string;
  transportType: "stdio" | "sse" | "streamable-http";
  connectionTimeoutMs: number;
  detachStderr?: () => void;
};
type SseEventSourceFetch = NonNullable<
  NonNullable<SSEClientTransportOptions["eventSourceInit"]>["fetch"]
>;

export const resolveMcpTransport: any = undefined as any;
