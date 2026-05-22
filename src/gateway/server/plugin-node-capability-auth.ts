// AUTH/MCP STUB - implementation removed

import type { AuthRateLimiter } from "../auth-rate-limit.js";
import type { GatewayWsClient } from "./ws-types.js";
import type { IncomingMessage } from "node:http";
import {
  authorizeHttpGatewayConnect,
  type GatewayAuthResult,
  type ResolvedGatewayAuth,
} from "../auth.js";
import {
  hasAuthorizedPluginNodeCapability,
  type PluginNodeCapabilitySurface,
} from "../plugin-node-capability.js";
import { getBearerToken, resolveHttpBrowserOriginPolicy } from "../http-auth-utils.js";

export const authorizePluginNodeCapabilityRequest: any = undefined as any;
