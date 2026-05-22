// AUTH/MCP STUB - implementation removed

import type { GatewayAuthConfig, GatewayTrustedProxyConfig } from "../config/types.gateway.js";
import type { IncomingMessage } from "node:http";
import {
  AUTH_RATE_LIMIT_SCOPE_SHARED_SECRET,
  type AuthRateLimiter,
  type RateLimitCheckResult,
} from "./auth-rate-limit.js";
import {
  isLoopbackAddress,
  resolveLocalInterfaceAddressMatch,
  resolveRequestClientIp,
  isTrustedProxyAddress,
  resolveClientIp,
} from "./net.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { checkBrowserOrigin } from "./origin-check.js";
import { readTailscaleWhoisIdentity, type TailscaleWhoisIdentity } from "../infra/tailscale.js";
import { safeEqualSecret } from "../security/secret-equal.js";
import { type ResolvedGatewayAuth } from "./auth-resolve.js";
import { withSerializedRateLimitAttempt } from "./rate-limit-attempt-serialization.js";

export type AuthorizeGatewayConnectParams = {
  auth: ResolvedGatewayAuth;
  connectAuth?: ConnectAuth | null;
  req?: IncomingMessage;
  trustedProxies?: string[];
  tailscaleWhois?: TailscaleWhoisLookup;
  /**
   * Explicit auth surface. HTTP keeps Tailscale forwarded-header auth disabled.
   * WS Control UI enables it intentionally for tokenless trusted-host login.
   */
  authSurface?: GatewayAuthSurface;
  /** Optional rate limiter instance; when provided, failed attempts are tracked per IP. */
  rateLimiter?: AuthRateLimiter;
  /** Client IP used for rate-limit tracking. Falls back to proxy-aware request IP resolution. */
  clientIp?: string;
  /** Optional limiter scope; defaults to shared-secret auth scope. */
  rateLimitScope?: string;
  /** Trust X-Real-IP only when explicitly enabled. */
  allowRealIpFallback?: boolean;
  /** Optional browser-origin policy for trusted-proxy HTTP requests. */
  browserOriginPolicy?: {
    requestHost?: string;
    origin?: string;
    allowedOrigins?: string[];
    allowHostHeaderOriginFallback?: boolean;
  };
};
export type GatewayAuthResult = {
  ok: boolean;
  method?:
    | "none"
    | "token"
    | "password"
    | "tailscale"
    | "device-token"
    | "bootstrap-token"
    | "trusted-proxy";
  user?: string;
  reason?: string;
  /** Present when the request was blocked by the rate limiter. */
  rateLimited?: boolean;
  /** Milliseconds the client should wait before retrying (when rate-limited). */
  retryAfterMs?: number;
};
export type GatewayAuthSurface = "http" | "ws-control-ui";
type ConnectAuth = {
  token?: string;
  password?: string;
};
type TailscaleUser = {
  login: string;
  name: string;
  profilePic?: string;
};
type TailscaleWhoisLookup = (ip: string) => Promise<TailscaleWhoisIdentity | null>;

export {
  resolveEffectiveSharedGatewayAuth,
  resolveGatewayAuth,
  type EffectiveSharedGatewayAuth,
  type ResolvedGatewayAuth,
  type ResolvedGatewayAuthMode,
  type ResolvedGatewayAuthModeSource,
} from "./auth-resolve.js";

export const assertGatewayAuthConfigured: any = undefined as any;
export const authorizeGatewayConnect: any = undefined as any;
export const authorizeHttpGatewayConnect: any = undefined as any;
export const authorizeWsControlUiGatewayConnect: any = undefined as any;
export const hasForwardedRequestHeaders: any = undefined as any;
export const isLocalDirectRequest: any = undefined as any;
