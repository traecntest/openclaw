// AUTH/MCP STUB - implementation removed

import {
  redactSensitiveUrl,
  redactSensitiveUrlLikeString,
} from "../shared/net/redact-sensitive-url.js";
import { isMcpConfigRecord, toMcpStringRecord } from "./mcp-config-shared.js";

export type HttpMcpTransportType = "sse" | "streamable-http";
type HttpMcpServerLaunchConfig = {
  transportType: HttpMcpTransportType;
  url: string;
  headers?: Record<string, string>;
};
type HttpMcpServerLaunchResult =
  | { ok: true; config: HttpMcpServerLaunchConfig }

export const describeHttpMcpServerLaunchConfig: any = undefined as any;
export const resolveHttpMcpServerLaunchConfig: any = undefined as any;
