// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  DEFAULT_OAUTH_REFRESH_MARGIN_MS,
  type AuthCredentialReasonCode,
  evaluateStoredCredentialEligibility,
  resolveTokenExpiryState,
} from "./auth-profiles/credential-state.js";
import { resolveAuthProfileDisplayLabel } from "./auth-profiles/display.js";
import { resolveEffectiveOAuthCredential } from "./auth-profiles/effective-oauth.js";
import { resolveAuthProfileOrder } from "./auth-profiles/order.js";
import type { AuthProfileCredential, AuthProfileStore } from "./auth-profiles/types.js";
import { resolveProviderIdForAuth } from "./provider-auth-aliases.js";
import { findNormalizedProviderValue, normalizeProviderId } from "./provider-id.js";

export type AuthProfileHealthStatus = "ok" | "expiring" | "expired" | "missing" | "static";

export type AuthProviderHealthStatus = "ok" | "expiring" | "expired" | "missing" | "static";

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

export type AuthHealthSummary = {
  now: number;
  warnAfterMs: number;
  profiles: AuthProfileHealth[];
  providers: AuthProviderHealth[];
};

export const DEFAULT_OAUTH_WARN_MS: any = undefined as any;
export const buildAuthHealthSummary: any = undefined as any;
export const formatRemainingShort: any = undefined as any;
