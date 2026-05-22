// AUTH/MCP STUB - implementation removed

import { verifyDeviceSignature } from "../../../infra/device-identity.js";
import { normalizeLowercaseStringOrEmpty } from "../../../shared/string-coerce.js";
import type { AuthRateLimiter } from "../../auth-rate-limit.js";
import type { GatewayAuthResult } from "../../auth.js";
import { buildDeviceAuthPayload, buildDeviceAuthPayloadV3 } from "../../device-auth.js";
import {
  isLoopbackAddress,
  isLoopbackHost,
  isPrivateOrLoopbackAddress,
  isPrivateOrLoopbackHost,
  resolveHostName,
} from "../../net.js";
import { GATEWAY_CLIENT_IDS, GATEWAY_CLIENT_MODES } from "../../protocol/client-info.js";
import type { ConnectParams } from "../../protocol/index.js";
import type { AuthProvidedKind } from "./auth-messages.js";

export type PairingLocalityKind =
  | "direct_local"
  | "cli_container_local"
  | "browser_container_local"
  | "shared_secret_loopback_local"
  | "remote";
export type HandshakeBrowserSecurityContext = {
  hasBrowserOriginHeader: boolean;
  enforceOriginCheckForAnyClient: boolean;
  rateLimitClientIp: string | undefined;
  authRateLimiter?: AuthRateLimiter;
};
type HandshakeConnectAuth = {
  token?: string;
  bootstrapToken?: string;
  deviceToken?: string;
  password?: string;
  approvalRuntimeToken?: string;
};

export const BROWSER_ORIGIN_LOOPBACK_RATE_LIMIT_IP: any = undefined as any;
export const BROWSER_ORIGIN_RATE_LIMIT_KEY_PREFIX: any = undefined as any;
export const resolveDeviceSignaturePayloadVersion: any = undefined as any;
export const resolveHandshakeBrowserSecurityContext: any = undefined as any;
export const resolvePairingLocality: any = undefined as any;
export const resolveUnauthorizedHandshakeContext: any = undefined as any;
export const shouldAllowSilentLocalPairing: any = undefined as any;
export const shouldSkipLocalBackendSelfPairing: any = undefined as any;
