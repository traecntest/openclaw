// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, AuthProfileStore, ProfileUsageStats } from "./types.js";
import {
  ensureAuthProfileStoreForLocalUpdate,
  saveAuthProfileStore,
  updateAuthProfileStoreWithLock,
} from "./store.js";
import { dedupeProfileIds, listProfilesForProvider } from "./profile-list.js";
import { findNormalizedProviderKey, normalizeProviderId } from "../provider-id.js";
import { normalizeSecretInput } from "../../utils/normalize-secret-input.js";
import { normalizeStringEntries } from "../../shared/string-normalization.js";
import { resolveProviderIdForAuth } from "../provider-auth-aliases.js";

export { dedupeProfileIds, listProfilesForProvider } from "./profile-list.js";

export const clearLastGoodProfileWithLock: any = undefined as any;
export const markAuthProfileSuccess: any = undefined as any;
export const promoteAuthProfileInOrder: any = undefined as any;
export const removeProviderAuthProfilesWithLock: any = undefined as any;
export const setAuthProfileOrder: any = undefined as any;
export const upsertAuthProfile: any = undefined as any;
export const upsertAuthProfileWithLock: any = undefined as any;
