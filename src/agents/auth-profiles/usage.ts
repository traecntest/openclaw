// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { normalizeProviderId } from "../provider-id.js";
import { resolveProviderRequestHeaders } from "../provider-request-config.js";
import { logAuthProfileFailureStateChange } from "./state-observation.js";
import { saveAuthProfileStore, updateAuthProfileStoreWithLock } from "./store.js";
import type {
  AuthProfileBlockedSource,
  AuthProfileFailureReason,
  AuthProfileStore,
  ProfileUsageStats,
} from "./types.js";
import {
  isActiveUnusableWindow,
  isAuthCooldownBypassedForProvider,
  resolveProfileUnusableUntil,
} from "./usage-state.js";

type WhamUsageWindow = {
  limit_window_seconds?: number;
  used_percent?: number;
  reset_at?: number;
  reset_after_seconds?: number;
};
type WhamUsageResponse = {
  rate_limit?: {
    limit_reached?: boolean;
    primary_window?: WhamUsageWindow;
    secondary_window?: WhamUsageWindow;
  };
};
type WhamCooldownProbeResult = {
  cooldownMs: number;
  reason: string;
  blockedUntil?: number;
  blockedSource?: AuthProfileBlockedSource;
};
type ResolvedAuthCooldownConfig = {
  billingBackoffMs: number;
  billingMaxMs: number;
  authPermanentBackoffMs: number;
  authPermanentMaxMs: number;
  failureWindowMs: number;
};
type DisabledFailureReason = Extract<AuthProfileFailureReason, "billing" | "auth_permanent">;
type DisabledFailureBackoffPolicy = {
  baseMs: (cfg: ResolvedAuthCooldownConfig) => number;
  maxMs: (cfg: ResolvedAuthCooldownConfig) => number;
};

export {
  clearExpiredCooldowns,
  getSoonestCooldownExpiry,
  isProfileInCooldown,
  resolveProfileUnusableUntil,
} from "./usage-state.js";
export { testing as __testing };


export const calculateAuthProfileCooldownMs: any = undefined as any;
export const clearAuthProfileCooldown: any = undefined as any;
export const markAuthProfileBlockedUntil: any = undefined as any;
export const markAuthProfileCooldown: any = undefined as any;
export const markAuthProfileFailure: any = undefined as any;
export const resolveProfileUnusableUntilForDisplay: any = undefined as any;
export const resolveProfilesUnavailableReason: any = undefined as any;
export const testing: any = undefined as any;
