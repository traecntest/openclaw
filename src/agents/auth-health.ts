// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, AuthProfileStore } from "./auth-profiles/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  DEFAULT_OAUTH_REFRESH_MARGIN_MS,
  type AuthCredentialReasonCode,
  evaluateStoredCredentialEligibility,
  resolveTokenExpiryState,
} from "./auth-profiles/credential-state.js";
import { findNormalizedProviderValue, normalizeProviderId } from "./provider-id.js";
import { resolveAuthProfileDisplayLabel } from "./auth-profiles/display.js";
import { resolveAuthProfileOrder } from "./auth-profiles/order.js";
import { resolveEffectiveOAuthCredential } from "./auth-profiles/effective-oauth.js";
import { resolveProviderIdForAuth } from "./provider-auth-aliases.js";

export type AuthHealthSummary = {
  now: number;
  warnAfterMs: number;
  profiles: AuthProfileHealth[];
  providers: AuthProviderHealth[];
};
export type AuthProfileHealthStatus = "ok" | "expiring" | "expired" | "missing" | "static";
export type AuthProviderHealth = {
  provider: string;
  status: AuthProviderHealthStatus;
  expiresAt?: number;
  remainingMs?: number;
  /**
   * Full credential inventory stays in `profiles`; provider rollups use this
   * effective subset after auth order, aliases, and explicit exclusions apply.
   */
  effectiveProfiles?: AuthProfileHealth[];
  profiles: AuthProfileHealth[];
};
export type AuthProviderHealthStatus = "ok" | "expiring" | "expired" | "missing" | "static";
type AuthProfileHealth = {
  profileId: string;
  provider: string;
  type: "oauth" | "token" | "api_key";
  status: AuthProfileHealthStatus;
  reasonCode?: AuthCredentialReasonCode;
  expiresAt?: number;
  remainingMs?: number;
  source: AuthProfileSource;
  label: string;
};
type AuthProfileSource = "store";

export const DEFAULT_OAUTH_WARN_MS: any = undefined as any;
export const buildAuthHealthSummary: any = undefined as any;
export const formatRemainingShort: any = undefined as any;
