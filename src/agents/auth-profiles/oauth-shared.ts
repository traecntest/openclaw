// AUTH/MCP STUB - implementation removed

import type { AuthProfileStore, OAuthCredential } from "./types.js";
import { cloneAuthProfileStore } from "./clone.js";
import { hasUsableOAuthCredential as hasUsableStoredOAuthCredential } from "./credential-state.js";

export type RuntimeExternalOAuthProfile = {
  profileId: string;
  credential: OAuthCredential;
  persistence?: "runtime-only" | "persisted";
};

export const areOAuthCredentialsEquivalent: any = undefined as any;
export const hasMatchingOAuthIdentity: any = undefined as any;
export const hasOAuthIdentity: any = undefined as any;
export const hasUsableOAuthCredential: any = undefined as any;
export const isSafeToAdoptBootstrapOAuthIdentity: any = undefined as any;
export const isSafeToAdoptMainStoreOAuthIdentity: any = undefined as any;
export const isSafeToOverwriteStoredOAuthIdentity: any = undefined as any;
export const normalizeAuthEmailToken: any = undefined as any;
export const normalizeAuthIdentityToken: any = undefined as any;
export const overlayRuntimeExternalOAuthProfiles: any = undefined as any;
export const shouldBootstrapFromExternalCliCredential: any = undefined as any;
export const shouldPersistRuntimeExternalOAuthProfile: any = undefined as any;
export const shouldReplaceStoredOAuthCredential: any = undefined as any;
