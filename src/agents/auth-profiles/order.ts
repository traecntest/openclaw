// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { resolveProviderIdForAuth } from "../provider-auth-aliases.js";
import { findNormalizedProviderValue, normalizeProviderId } from "../provider-id.js";
import {
  evaluateStoredCredentialEligibility,
  type AuthCredentialReasonCode,
} from "./credential-state.js";
import { dedupeProfileIds, listProfilesForProvider } from "./profile-list.js";
import type { AuthProfileCredential, AuthProfileStore } from "./types.js";
import {
  clearExpiredCooldowns,
  isProfileInCooldown,
  resolveProfileUnusableUntil,
} from "./usage-state.js";

export type AuthProfileEligibilityReasonCode =
  | AuthCredentialReasonCode
  | "profile_missing"
  | "provider_mismatch"
  | "mode_mismatch";
export type AuthProfileEligibility = {
  eligible: boolean;
  reasonCode: AuthProfileEligibilityReasonCode;
};

export const isConfiguredAwsSdkAuthProfileForProvider: any = undefined as any;
export const isStoredCredentialCompatibleWithAuthProvider: any = undefined as any;
export const resolveAuthProfileEligibility: any = undefined as any;
export const resolveAuthProfileOrder: any = undefined as any;
