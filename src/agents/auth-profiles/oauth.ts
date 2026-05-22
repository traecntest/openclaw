// AUTH/MCP STUB - implementation removed

import {
  getOAuthApiKey,
  getOAuthProviders,
  type OAuthCredentials,
  type OAuthProvider,
} from "@earendil-works/pi-ai/oauth";
import { getRuntimeConfig } from "../../config/config.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { coerceSecretRef } from "../../config/types.secrets.js";
import { formatErrorMessage } from "../../infra/errors.js";
import {
  formatProviderAuthProfileApiKeyWithPlugin,
  refreshProviderOAuthCredentialWithPlugin,
} from "../../plugins/provider-runtime.runtime.js";
import { resolveSecretRefString, type SecretRefResolveCache } from "../../secrets/resolve.js";
import { normalizeLowercaseStringOrEmpty } from "../../shared/string-coerce.js";
import { normalizeOptionalSecretInput } from "../../utils/normalize-secret-input.js";
import { refreshChutesTokens } from "../chutes-oauth.js";
import { resolveProviderIdForAuth } from "../provider-auth-aliases.js";
import { log } from "./constants.js";
import { resolveTokenExpiryState } from "./credential-state.js";
import { formatAuthDoctorHint } from "./doctor.js";
import {
  readExternalCliFallbackCredential,
  readManagedExternalCliCredential,
} from "./external-cli-sync.js";
import { createOAuthManager, OAuthManagerRefreshError } from "./oauth-manager.js";
import { assertNoOAuthSecretRefPolicyViolations } from "./policy.js";
import { clearLastGoodProfileWithLock } from "./profiles.js";
import { suggestOAuthProfileIdForLegacyDefault } from "./repair.js";
import {
  getRuntimeAuthProfileStoreSnapshot,
  hasRuntimeAuthProfileStoreSnapshot,
  setRuntimeAuthProfileStoreSnapshot,
} from "./runtime-snapshots.js";
import {
  loadAuthProfileStoreForSecretsRuntime,
  resolvePersistedAuthProfileOwnerAgentDir,
} from "./store.js";
import type { AuthProfileCredential, AuthProfileStore, OAuthCredential } from "./types.js";

type ResolveApiKeyForProfileResult = {
  apiKey: string;
  provider: string;
  email?: string;
  profileId: string;
  profileType: AuthProfileCredential["type"];
};
type ResolveApiKeyForProfileParams = {
  cfg?: OpenClawConfig;
  store: AuthProfileStore;
  profileId: string;
  agentDir?: string;
  forceRefresh?: boolean;
};
type SecretDefaults = NonNullable<OpenClawConfig["secrets"]>["defaults"];

export {
  isSafeToCopyOAuthIdentity,
  isSameOAuthIdentity,
  normalizeAuthEmailToken,
  normalizeAuthIdentityToken,
  shouldMirrorRefreshedOAuthCredential,
} from "./oauth-identity.js";
export type { OAuthMirrorDecision, OAuthMirrorDecisionReason } from "./oauth-identity.js";

export const isRefreshTokenReusedError: any = undefined as any;
export const refreshOAuthCredentialForRuntime: any = undefined as any;
export const resetOAuthRefreshQueuesForTest: any = undefined as any;
export const resolveApiKeyForProfile: any = undefined as any;
