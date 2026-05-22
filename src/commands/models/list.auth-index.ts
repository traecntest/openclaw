// AUTH/MCP STUB - implementation removed

import type { AuthProfileStore } from "../../agents/auth-profiles/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { PluginMetadataSnapshot } from "../../plugins/plugin-metadata-snapshot.types.js";
import {
  OPENAI_CODEX_PROVIDER_ID,
  openAIProviderUsesCodexRuntimeByDefault,
} from "../../agents/openai-codex-routing.js";
import {
  hasSyntheticLocalProviderAuthConfig,
  hasUsableCustomProviderApiKey,
} from "../../agents/model-auth.js";
import {
  listProviderEnvAuthLookupKeys,
  resolveProviderEnvAuthEvidence,
  resolveProviderEnvApiKeyCandidates,
} from "../../agents/model-auth-env-vars.js";
import { loadPluginRegistrySnapshotWithMetadata } from "../../plugins/plugin-registry.js";
import { normalizeProviderIdForAuth } from "../../agents/provider-id.js";
import { resolveAgentModelPrimaryValue } from "../../config/model-input.js";
import { resolveAwsSdkEnvVarName } from "../../agents/model-auth-runtime-shared.js";
import { resolveEnvApiKey } from "../../agents/model-auth-env.js";
import { resolveProviderAuthAliasMap } from "../../agents/provider-auth-aliases.js";

export type CreateModelListAuthIndexParams = {
  cfg: OpenClawConfig;
  authStore: AuthProfileStore;
  workspaceDir?: string;
  env?: NodeJS.ProcessEnv;
  syntheticAuthProviderRefs?: readonly string[];
  metadataSnapshot?: PluginMetadataSnapshot;
};
export type ModelListAuthIndex = {
  hasProviderAuth(provider: string): boolean;
  allowsProviderAuthAvailabilityFallback(provider: string): boolean;
};

export const createModelListAuthIndex: any = undefined as any;
