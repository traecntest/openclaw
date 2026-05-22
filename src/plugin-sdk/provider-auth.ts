// AUTH/MCP STUB - implementation removed

import path from "node:path";
import type { OpenClawConfig } from "../config/config.js";
import {
  COPILOT_INTEGRATION_ID,
  buildCopilotIdeHeaders,
} from "../agents/copilot-dynamic-headers.js";
import { ensureAuthProfileStore } from "../agents/auth-profiles/store.js";
import { listProfilesForProvider } from "../agents/auth-profiles/profiles.js";
import { loadJsonFile, saveJsonFile } from "../infra/json-file.js";
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";
import { resolveApiKeyForProfile } from "../agents/auth-profiles/oauth.js";
import { resolveAuthProfileOrder } from "../agents/auth-profiles/order.js";
import { resolveDefaultAgentDir } from "../agents/agent-scope-config.js";
import { resolveEnvApiKey } from "../agents/model-auth-env.js";
import { resolveProviderEndpoint } from "./provider-model-shared.js";
import { resolveStateDir } from "../config/paths.js";

export type CachedCopilotToken = {
  token: string;
  expiresAt: number;
  updatedAt: number;
  integrationId?: string;
};

export const DEFAULT_COPILOT_API_BASE_URL = "https://api.individual.githubcopilot.com";

export type { AuthProfileStore, OAuthCredential } from "../agents/auth-profiles/types.js";
export type { OpenClawConfig } from "../config/config.js";
export type { ProviderAuthContext } from "../plugins/types.js";
export type { ProviderAuthResult } from "../plugins/types.js";
export type { SecretInput } from "../config/types.secrets.js";
export type { SecretInputMode } from "../plugins/provider-auth-types.js";
export {
  COPILOT_EDITOR_PLUGIN_VERSION,
  COPILOT_EDITOR_VERSION,
  COPILOT_GITHUB_API_VERSION,
  COPILOT_INTEGRATION_ID,
  COPILOT_USER_AGENT,
  buildCopilotIdeHeaders,
} from "../agents/copilot-dynamic-headers.js";
export {
  CUSTOM_LOCAL_AUTH_MARKER,
  MINIMAX_OAUTH_MARKER,
  isKnownEnvApiKeyMarker,
  isNonSecretApiKeyMarker,
  resolveOAuthApiKeyMarker,
  resolveNonEnvSecretRefApiKeyMarker,
} from "../agents/model-auth-markers.js";
export {
  DEFAULT_OAUTH_REFRESH_MARGIN_MS,
  hasUsableOAuthCredential,
} from "../agents/auth-profiles/credential-state.js";
export {
  applyAuthProfileConfig,
  buildApiKeyCredential,
  upsertApiKeyProfile,
  writeOAuthCredentials,
  type ApiKeyStorageOptions,
  type WriteOAuthCredentialsOptions,
} from "../plugins/provider-auth-helpers.js";
export {
  buildTokenProfileId,
  validateAnthropicSetupToken,
} from "../plugins/provider-auth-token.js";
export {
  ensureApiKeyFromEnvOrPrompt,
  ensureApiKeyFromOptionEnvOrPrompt,
  normalizeSecretInputModeInput,
  promptSecretRefForSetup,
  resolveSecretInputModeForEnvSelection,
} from "../plugins/provider-auth-input.js";
export {
  ensureAuthProfileStore,
  ensureAuthProfileStoreForLocalUpdate,
  updateAuthProfileStoreWithLock,
} from "../agents/auth-profiles/store.js";
export {
  formatApiKeyPreview,
  normalizeApiKeyInput,
  validateApiKeyInput,
} from "../plugins/provider-auth-input.js";
export {
  generateHexPkceVerifierChallenge,
  generatePkceVerifierChallenge,
  toFormUrlEncoded,
} from "./oauth-utils.js";
export {
  listKnownProviderAuthEnvVarNames,
  omitEnvKeysCaseInsensitive,
} from "../secrets/provider-env-vars.js";
export {
  listProfilesForProvider,
  removeProviderAuthProfilesWithLock,
  upsertAuthProfile,
  upsertAuthProfileWithLock,
} from "../agents/auth-profiles/profiles.js";
export {
  normalizeOptionalSecretInput,
  normalizeSecretInput,
} from "../utils/normalize-secret-input.js";
export {
  readClaudeCliCredentialsCached,
  readCodexCliCredentialsCached,
} from "../agents/cli-credentials.js";
export { CLAUDE_CLI_PROFILE_ID, CODEX_CLI_PROFILE_ID } from "../agents/auth-profiles/constants.js";
export { buildOauthProviderAuthResult } from "./provider-auth-result.js";
export { coerceSecretRef, hasConfiguredSecretInput } from "../config/types.secrets.js";
export { createProviderApiKeyAuthMethod } from "../plugins/provider-api-key-auth.js";
export { normalizeApiKeyConfig } from "../agents/models-config.providers.secrets.js";
export { resolveDefaultSecretProviderAlias } from "../secrets/ref-contract.js";
export { resolveEnvApiKey } from "../agents/model-auth-env.js";
export { resolveOpenClawAgentDir } from "./agent-dir-compat.js";
export { resolveRequiredHomeDir } from "../infra/home-dir.js";
export { suggestOAuthProfileIdForLegacyDefault } from "../agents/auth-profiles/repair.js";

export const deriveCopilotApiBaseUrlFromToken: any = undefined as any;
export const isProviderApiKeyConfigured: any = undefined as any;
export const isProviderAuthProfileConfigured: any = undefined as any;
export const listUsableProviderAuthProfileIds: any = undefined as any;
export const resolveCopilotApiToken: any = undefined as any;
export const resolveProviderAuthProfileApiKey: any = undefined as any;
