// AUTH/MCP STUB - implementation removed

import type { PluginManifestRecord } from "../plugins/manifest-registry.js";
import type { UsageProviderId } from "./provider-usage.types.js";
import {
  dedupeProfileIds,
  ensureAuthProfileStore,
  ensureAuthProfileStoreWithoutExternalProfiles,
  hasAnyAuthProfileStoreSource,
  listProfilesForProvider,
  resolveApiKeyForProfile,
  resolveAuthProfileOrder,
} from "../agents/auth-profiles.js";
import {
  isActivatedManifestOwner,
  passesManifestOwnerBasePolicy,
} from "../plugins/manifest-owner-policy.js";
import { getRuntimeConfig, type OpenClawConfig } from "../config/config.js";
import { isNonSecretApiKeyMarker } from "../agents/model-auth-markers.js";
import { loadManifestMetadataSnapshot } from "../plugins/manifest-contract-eligibility.js";
import { normalizePluginsConfig } from "../plugins/config-state.js";
import { normalizeProviderId } from "../agents/model-selection.js";
import { normalizeSecretInput } from "../utils/normalize-secret-input.js";
import { resolveEnvApiKey } from "../agents/model-auth-env.js";
import { resolveLegacyPiAgentAccessToken } from "./provider-usage.shared.js";
import { resolveProviderAuthEnvVarCandidates } from "../secrets/provider-env-vars.js";
import { resolveProviderUsageAuthWithPlugin } from "../plugins/provider-runtime.js";
import { resolveUsableCustomProviderApiKey } from "../agents/model-auth.js";

export type ProviderAuth = {
  provider: UsageProviderId;
  token: string;
  accountId?: string;
};
type AuthStore = ReturnType<typeof ensureAuthProfileStore>;
type UsageAuthState = {
  cfg: OpenClawConfig;
  env: NodeJS.ProcessEnv;
  agentDir?: string;
  allowAuthProfileStore: boolean;
  store?: AuthStore;
};

export const resolveProviderAuths: any = undefined as any;
