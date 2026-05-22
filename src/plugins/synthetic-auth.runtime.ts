// AUTH/MCP STUB - implementation removed

import type { PluginRegistrySnapshot } from "./plugin-registry.js";
import { getPluginRegistryState } from "./runtime-state.js";
import { loadPluginManifestRegistryForInstalledIndex } from "./manifest-registry-installed.js";
import { loadPluginRegistrySnapshotWithMetadata } from "./plugin-registry.js";
import { normalizeProviderId } from "../agents/provider-id.js";

export const resolveRuntimeExternalAuthProviderRefs: any = undefined as any;
export const resolveRuntimeSyntheticAuthProviderRefs: any = undefined as any;
