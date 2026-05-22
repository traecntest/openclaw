// AUTH/MCP STUB - implementation removed

import type { IncomingMessage } from "node:http";
import {
  AUTH_RATE_LIMIT_SCOPE_DEVICE_TOKEN,
  AUTH_RATE_LIMIT_SCOPE_SHARED_SECRET,
  type AuthRateLimiter,
} from "../../auth-rate-limit.js";
import {
  authorizeHttpGatewayConnect,
  authorizeWsControlUiGatewayConnect,
  type GatewayAuthResult,
  type ResolvedGatewayAuth,
} from "../../auth.js";
import { normalizeOptionalString } from "../../../shared/string-coerce.js";

export type ConnectAuthDecision = {
  authResult: GatewayAuthResult;
  authOk: boolean;
  authMethod: GatewayAuthResult["method"];
};
export type ConnectAuthState = {
  authResult: GatewayAuthResult;
  authOk: boolean;
  authMethod: GatewayAuthResult["method"];
  sharedAuthOk: boolean;
  sharedAuthProvided: boolean;
  bootstrapTokenCandidate?: string;
  deviceTokenCandidate?: string;
  deviceTokenCandidateSource?: DeviceTokenCandidateSource;
};
export type DeviceTokenCandidateSource = "explicit-device-token" | "shared-token-fallback";
type HandshakeConnectAuth = {
  token?: string;
  bootstrapToken?: string;
  deviceToken?: string;
  password?: string;
  approvalRuntimeToken?: string;
};
type VerifyDeviceTokenResult = { ok: boolean; reason?: string };
type VerifyBootstrapTokenResult = { ok: boolean; reason?: string };

export const resolveConnectAuthDecision: any = undefined as any;
export const resolveConnectAuthState: any = undefined as any;
