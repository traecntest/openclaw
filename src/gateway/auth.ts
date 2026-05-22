// AUTH/MCP STUB - implementation removed

import type { IncomingMessage } from "node:http";
import type { GatewayAuthConfig, GatewayTrustedProxyConfig } from "../config/types.gateway.js";
import { readTailscaleWhoisIdentity, type TailscaleWhoisIdentity } from "../infra/tailscale.js";
import { safeEqualSecret } from "../security/secret-equal.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import {
  AUTH_RATE_LIMIT_SCOPE_SHARED_SECRET,
  type AuthRateLimiter,
  type RateLimitCheckResult,
} from "./auth-rate-limit.js";
import { type ResolvedGatewayAuth } from "./auth-resolve.js";
import {
  isLoopbackAddress,
  resolveLocalInterfaceAddressMatch,
  resolveRequestClientIp,
  isTrustedProxyAddress,
  resolveClientIp,
} from "./net.js";
import { checkBrowserOrigin } from "./origin-check.js";
import { withSerializedRateLimitAttempt } from "./rate-limit-attempt-serialization.js";

export {
  resolveEffectiveSharedGatewayAuth,
  resolveGatewayAuth,
  type EffectiveSharedGatewayAuth,
  type ResolvedGatewayAuth,
  type ResolvedGatewayAuthMode,
  type ResolvedGatewayAuthModeSource,
} from "./auth-resolve.js";

