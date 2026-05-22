// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { formatErrorMessage } from "../../infra/errors.js";
import { withFileLock } from "../../infra/file-lock.js";
import { redactSensitiveText } from "../../logging/redact.js";
import {
  AUTH_STORE_LOCK_OPTIONS,
  OAUTH_REFRESH_CALL_TIMEOUT_MS,
  OAUTH_REFRESH_LOCK_OPTIONS,
  log,
} from "./constants.js";
import { shouldMirrorRefreshedOAuthCredential } from "./oauth-identity.js";
import {
  buildRefreshContentionError,
  isGlobalRefreshLockTimeoutError,
} from "./oauth-refresh-lock-errors.js";
import {
  areOAuthCredentialsEquivalent,
  hasMatchingOAuthIdentity,
  hasUsableOAuthCredential,
  isSafeToAdoptBootstrapOAuthIdentity,
  isSafeToAdoptMainStoreOAuthIdentity,
  isSafeToOverwriteStoredOAuthIdentity,
  overlayRuntimeExternalOAuthProfiles,
  shouldBootstrapFromExternalCliCredential,
  shouldPersistRuntimeExternalOAuthProfile,
  shouldReplaceStoredOAuthCredential,
  type RuntimeExternalOAuthProfile,
} from "./oauth-shared.js";
import { ensureAuthStoreFile, resolveAuthStorePath, resolveOAuthRefreshLockPath } from "./paths.js";
import {
  ensureAuthProfileStoreWithoutExternalProfiles,
  loadAuthProfileStoreWithoutExternalProfiles,
  saveAuthProfileStore,
  resolvePersistedAuthProfileOwnerAgentDir,
  updateAuthProfileStoreWithLock,
} from "./store.js";
import type { AuthProfileStore, OAuthCredential, OAuthCredentials } from "./types.js";

export type OAuthManagerAdapter = {
  buildApiKey: (
    provider: string,
    credentials: OAuthCredential,
    context: { cfg?: OpenClawConfig; agentDir?: string },
  ) => Promise<string>;
  refreshCredential: (credential: OAuthCredential) => Promise<OAuthCredentials | null>;
  readBootstrapCredential: (params: {
    profileId: string;
    credential: OAuthCredential;
  }) => OAuthCredential | null;
  readFallbackCredential?: (params: {
    profileId: string;
    credential: OAuthCredential;
  }) => OAuthCredential | null;
  isRefreshTokenReusedError: (error: unknown) => boolean;
};

export type ResolvedOAuthAccess = {
  apiKey: string;
  credential: OAuthCredential;
};

export const OAuthManagerRefreshError: any = undefined as any;
export const areOAuthCredentialsEquivalent: any = undefined as any;
export const createOAuthManager: any = undefined as any;
export const hasUsableOAuthCredential: any = undefined as any;
export const isSafeToAdoptBootstrapOAuthIdentity: any = undefined as any;
export const isSafeToAdoptMainStoreOAuthIdentity: any = undefined as any;
export const isSafeToOverwriteStoredOAuthIdentity: any = undefined as any;
export const overlayRuntimeExternalOAuthProfiles: any = undefined as any;
export const resolveEffectiveOAuthCredential: any = undefined as any;
export const shouldBootstrapFromExternalCliCredential: any = undefined as any;
export const shouldPersistRuntimeExternalOAuthProfile: any = undefined as any;
export const shouldReplaceStoredOAuthCredential: any = undefined as any;
