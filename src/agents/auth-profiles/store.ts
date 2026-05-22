// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import type { AuthProfileStore } from "./types.js";
import type { ExternalCliAuthDiscovery } from "./external-cli-discovery.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import {
  applyLegacyAuthStore,
  buildPersistedAuthProfileSecretsStore,
  isRuntimeLegacyOAuthSidecarCredential,
  loadLegacyAuthProfileStore,
  loadPersistedAuthProfileStore,
  matchesRuntimeLegacyOAuthSidecarMaterial,
  mergeAuthProfileStores,
  mergeOAuthFileIntoStore,
} from "./persisted.js";
import {
  clearLoadedAuthStoreCache,
  readCachedAuthProfileStore,
  writeCachedAuthProfileStore,
} from "./store-cache.js";
import {
  clearRuntimeAuthProfileStoreSnapshots as clearRuntimeAuthProfileStoreSnapshotsImpl,
  getRuntimeAuthProfileStoreSnapshot,
  hasRuntimeAuthProfileStoreSnapshot,
  replaceRuntimeAuthProfileStoreSnapshots as replaceRuntimeAuthProfileStoreSnapshotsImpl,
  setRuntimeAuthProfileStoreSnapshot,
} from "./runtime-snapshots.js";
import {
  ensureAuthStoreFile,
  resolveAuthStatePath,
  resolveAuthStorePath,
  resolveLegacyAuthStorePath,
} from "./paths.js";
import {
  overlayExternalAuthProfiles,
  shouldPersistExternalAuthProfile,
  syncPersistedExternalCliAuthProfiles,
} from "./external-auth.js";
import { AUTH_STORE_LOCK_OPTIONS, AUTH_STORE_VERSION, log } from "./constants.js";
import { cloneAuthProfileStore } from "./clone.js";
import { isDeepStrictEqual } from "node:util";
import { isSafeToAdoptMainStoreOAuthIdentity } from "./oauth-shared.js";
import { loadJsonFile, saveJsonFile } from "../../infra/json-file.js";
import { savePersistedAuthProfileState } from "./state.js";
import { withFileLock } from "../../infra/file-lock.js";

type ExternalCliSyncResult = {
  store: AuthProfileStore;
  cacheable: boolean;
};
type LoadAuthProfileStoreOptions = {
  allowKeychainPrompt?: boolean;
  config?: OpenClawConfig;
  externalCli?: ExternalCliAuthDiscovery;
  readOnly?: boolean;
  resolveLegacyOAuthSidecars?: boolean;
  syncExternalCli?: boolean;
  externalCliProviderIds?: Iterable<string>;
  externalCliProfileIds?: Iterable<string>;
};
type ResolvedExternalCliOverlayOptions = {
  allowKeychainPrompt?: boolean;
  config?: OpenClawConfig;
  externalCliProviderIds?: Iterable<string>;
  externalCliProfileIds?: Iterable<string>;
};
type SaveAuthProfileStoreOptions = {
  filterExternalAuthProfiles?: boolean;
  syncExternalCli?: boolean;
};
type SyncLockSnapshot = {
  raw: string;
  stat: fs.Stats;
  payload: Record<string, unknown> | null;
};

export { hasAnyAuthProfileStoreSource } from "./source-check.js";

export const clearRuntimeAuthProfileStoreSnapshots: any = undefined as any;
export const ensureAuthProfileStore: any = undefined as any;
export const ensureAuthProfileStoreForLocalUpdate: any = undefined as any;
export const ensureAuthProfileStoreWithoutExternalProfiles: any = undefined as any;
export const findPersistedAuthProfileCredential: any = undefined as any;
export const loadAuthProfileStore: any = undefined as any;
export const loadAuthProfileStoreForRuntime: any = undefined as any;
export const loadAuthProfileStoreForSecretsRuntime: any = undefined as any;
export const loadAuthProfileStoreWithoutExternalProfiles: any = undefined as any;
export const replaceRuntimeAuthProfileStoreSnapshots: any = undefined as any;
export const resolvePersistedAuthProfileOwnerAgentDir: any = undefined as any;
export const saveAuthProfileStore: any = undefined as any;
export const updateAuthProfileStoreWithLock: any = undefined as any;
