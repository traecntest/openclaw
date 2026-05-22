// AUTH STUB - implementation removed

import path from "node:path";
import { resolveDefaultAgentDir } from "../agents/agent-scope-config.js";
import { resolveApiKeyForProfile } from "../agents/auth-profiles/oauth.js";
import { resolveAuthProfileOrder } from "../agents/auth-profiles/order.js";
import { listProfilesForProvider } from "../agents/auth-profiles/profiles.js";
import { ensureAuthProfileStore } from "../agents/auth-profiles/store.js";
import {
  COPILOT_INTEGRATION_ID,
  buildCopilotIdeHeaders,
} from "../agents/copilot-dynamic-headers.js";
import { resolveEnvApiKey } from "../agents/model-auth-env.js";
import type { OpenClawConfig } from "../config/config.js";
import { resolveStateDir } from "../config/paths.js";
import { loadJsonFile, saveJsonFile } from "../infra/json-file.js";
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";
import { resolveProviderEndpoint } from "./provider-model-shared.js";

export { CLAUDE_CLI_PROFILE_ID, CODEX_CLI_PROFILE_ID } from "../agents/auth-profiles/constants.js";
export { resolveEnvApiKey } from "../agents/model-auth-env.js";
export { suggestOAuthProfileIdForLegacyDefault } from "../agents/auth-profiles/repair.js";
export { normalizeApiKeyConfig } from "../agents/models-config.providers.secrets.js";
export { createProviderApiKeyAuthMethod } from "../plugins/provider-api-key-auth.js";
export { coerceSecretRef, hasConfiguredSecretInput } from "../config/types.secrets.js";
export { resolveDefaultSecretProviderAlias } from "../secrets/ref-contract.js";
export { resolveRequiredHomeDir } from "../infra/home-dir.js";
export { resolveOpenClawAgentDir } from "./agent-dir-compat.js";
export { buildOauthProviderAuthResult } from "./provider-auth-result.js";

export type CachedCopilotToken = {
  token: string;
  expiresAt: number;
  updatedAt: number;
  integrationId?: string;
};

export const DEFAULT_COPILOT_API_BASE_URL: any = undefined as any;
export const deriveCopilotApiBaseUrlFromToken: any = undefined as any;
export const isProviderApiKeyConfigured: any = undefined as any;
export const isProviderAuthProfileConfigured: any = undefined as any;
export const listUsableProviderAuthProfileIds: any = undefined as any;
export const resolveCopilotApiToken: any = undefined as any;
export const resolveProviderAuthProfileApiKey: any = undefined as any;
