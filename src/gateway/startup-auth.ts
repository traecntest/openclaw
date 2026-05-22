// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import type { GatewayAuthConfig, GatewayTailscaleConfig } from "../config/types.gateway.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  hasConfiguredGatewayAuthSecretInput,
  resolveGatewayPasswordSecretRefValue,
  resolveGatewayTokenSecretRefValue,
} from "./auth-config-utils.js";
import {
  hasGatewayPasswordEnvCandidate,
  hasGatewayTokenEnvCandidate,
  trimToUndefined,
} from "./credentials.js";
import { assertExplicitGatewayAuthModeWhenBothConfigured } from "./auth-mode-policy.js";
import { assertGatewayAuthNotKnownWeak } from "./known-weak-gateway-secrets.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { resolveGatewayAuth, type ResolvedGatewayAuth } from "./auth.js";

export { assertGatewayAuthNotKnownWeak } from "./known-weak-gateway-secrets.js";

export const assertHooksTokenSeparateFromGatewayAuth: any = undefined as any;
export const ensureGatewayStartupAuth: any = undefined as any;
export const mergeGatewayAuthConfig: any = undefined as any;
export const mergeGatewayTailscaleConfig: any = undefined as any;
