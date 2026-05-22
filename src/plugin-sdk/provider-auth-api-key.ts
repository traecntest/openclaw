// AUTH/MCP STUB - implementation removed

export type { OpenClawConfig } from "../config/config.js";
export type { SecretInput } from "../config/types.secrets.js";
export {
  applyAuthProfileConfig,
  buildApiKeyCredential,
  upsertApiKeyProfile,
  type ApiKeyStorageOptions,
} from "../plugins/provider-auth-helpers.js";
export {
  formatApiKeyPreview,
  normalizeApiKeyInput,
  validateApiKeyInput,
  ensureApiKeyFromOptionEnvOrPrompt,
  normalizeSecretInputModeInput,
  promptSecretRefForSetup,
  resolveSecretInputModeForEnvSelection,
} from "../plugins/provider-auth-input.js";
export {
  normalizeOptionalSecretInput,
  normalizeSecretInput,
} from "../utils/normalize-secret-input.js";
export { createProviderApiKeyAuthMethod } from "../plugins/provider-api-key-auth.js";
export { upsertAuthProfile, upsertAuthProfileWithLock } from "../agents/auth-profiles/profiles.js";

