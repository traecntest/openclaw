// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, AuthProfileStore, OAuthCredential } from "./types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import {
  formatProviderAuthProfileApiKeyWithPlugin,
  refreshProviderOAuthCredentialWithPlugin,
} from "../../plugins/provider-runtime.runtime.js";
import {
  getOAuthApiKey,
  getOAuthProviders,
  type OAuthCredentials,
  type OAuthProvider,
} from "@earendil-works/pi-ai/oauth";
import {
  getRuntimeAuthProfileStoreSnapshot,
  hasRuntimeAuthProfileStoreSnapshot,
  setRuntimeAuthProfileStoreSnapshot,
} from "./runtime-snapshots.js";
import {
  loadAuthProfileStoreForSecretsRuntime,
  resolvePersistedAuthProfileOwnerAgentDir,
} from "./store.js";
import {
  readExternalCliFallbackCredential,
  readManagedExternalCliCredential,
} from "./external-cli-sync.js";
import { assertNoOAuthSecretRefPolicyViolations } from "./policy.js";
import { clearLastGoodProfileWithLock } from "./profiles.js";
import { coerceSecretRef } from "../../config/types.secrets.js";
import { createOAuthManager, OAuthManagerRefreshError } from "./oauth-manager.js";
import { formatAuthDoctorHint } from "./doctor.js";
import { formatErrorMessage } from "../../infra/errors.js";
import { getRuntimeConfig } from "../../config/config.js";
import { log } from "./constants.js";
import { normalizeLowercaseStringOrEmpty } from "../../shared/string-coerce.js";
import { normalizeOptionalSecretInput } from "../../utils/normalize-secret-input.js";
import { refreshChutesTokens } from "../chutes-oauth.js";
import { resolveProviderIdForAuth } from "../provider-auth-aliases.js";
import { resolveSecretRefString, type SecretRefResolveCache } from "../../secrets/resolve.js";
import { resolveTokenExpiryState } from "./credential-state.js";
import { suggestOAuthProfileIdForLegacyDefault } from "./repair.js";

type ResolveApiKeyForProfileParams = {
  cfg?: OpenClawConfig;
  store: AuthProfileStore;
  profileId: string;
  agentDir?: string;
  forceRefresh?: boolean;
};
type ResolveApiKeyForProfileResult = {
  apiKey: string;
  provider: string;
  email?: string;
  profileId: string;
  profileType: AuthProfileCredential["type"];
};
type SecretDefaults = NonNullable<OpenClawConfig["secrets"]>["defaults"];

export type { OAuthMirrorDecision, OAuthMirrorDecisionReason } from "./oauth-identity.js";
export {
  isSafeToCopyOAuthIdentity,
  isSameOAuthIdentity,
  normalizeAuthEmailToken,
  normalizeAuthIdentityToken,
  shouldMirrorRefreshedOAuthCredential,
} from "./oauth-identity.js";

export const isRefreshTokenReusedError: any = undefined as any;
export const refreshOAuthCredentialForRuntime: any = undefined as any;
export const resetOAuthRefreshQueuesForTest: any = undefined as any;
export const resolveApiKeyForProfile: any = undefined as any;
