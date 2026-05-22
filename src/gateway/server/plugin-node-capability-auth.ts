// AUTH STUB - implementation removed

import type { IncomingMessage } from "node:http";
import type { AuthRateLimiter } from "../auth-rate-limit.js";
import {
  authorizeHttpGatewayConnect,
  type GatewayAuthResult,
  type ResolvedGatewayAuth,
} from "../auth.js";
import { getBearerToken, resolveHttpBrowserOriginPolicy } from "../http-auth-utils.js";
import {
  hasAuthorizedPluginNodeCapability,
  type PluginNodeCapabilitySurface,
} from "../plugin-node-capability.js";
import type { GatewayWsClient } from "./ws-types.js";

export const authorizePluginNodeCapabilityRequest: any = undefined as any;
