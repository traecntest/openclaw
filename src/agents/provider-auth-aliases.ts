// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { PluginManifestRecord } from "../plugins/manifest-registry.js";
import type { PluginMetadataSnapshot } from "../plugins/plugin-metadata-snapshot.types.js";
import type { PluginOrigin } from "../plugins/plugin-origin.types.js";
import {
  isWorkspacePluginAllowedByConfig,
  normalizePluginConfigId,
} from "../plugins/plugin-config-trust.js";
import { getCurrentPluginMetadataSnapshot } from "../plugins/current-plugin-metadata-snapshot.js";
import { loadPluginMetadataSnapshot } from "../plugins/plugin-metadata-snapshot.js";
import { normalizePluginsConfig } from "../plugins/config-state.js";
import { normalizeProviderId } from "./provider-id.js";
import { resolvePluginControlPlaneFingerprint } from "../plugins/plugin-control-plane-context.js";

export type ProviderAuthAliasLookupParams = {
  config?: OpenClawConfig;
  workspaceDir?: string;
  env?: NodeJS.ProcessEnv;
  includeUntrustedWorkspacePlugins?: boolean;
  metadataSnapshot?: PluginMetadataSnapshot;
};
type ProviderAuthAliasCandidate = {
  origin?: PluginOrigin;
  target: string;
};

export const resetProviderAuthAliasMapCacheForTest: any = undefined as any;
export const resolveProviderAuthAliasMap: any = undefined as any;
export const resolveProviderIdForAuth: any = undefined as any;
