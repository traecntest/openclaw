// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { withFileLock } from "../../infra/file-lock.js";
import { loadJsonFile, saveJsonFile } from "../../infra/json-file.js";
import { cloneAuthProfileStore } from "./clone.js";
import { AUTH_STORE_LOCK_OPTIONS, AUTH_STORE_VERSION, log } from "./constants.js";
import {
  overlayExternalAuthProfiles,
  shouldPersistExternalAuthProfile,
  syncPersistedExternalCliAuthProfiles,
} from "./external-auth.js";
import type { ExternalCliAuthDiscovery } from "./external-cli-discovery.js";
import { isSafeToAdoptMainStoreOAuthIdentity } from "./oauth-shared.js";
import {
  ensureAuthStoreFile,
  resolveAuthStatePath,
  resolveAuthStorePath,
  resolveLegacyAuthStorePath,
} from "./paths.js";
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
  clearRuntimeAuthProfileStoreSnapshots as clearRuntimeAuthProfileStoreSnapshotsImpl,
  getRuntimeAuthProfileStoreSnapshot,
  hasRuntimeAuthProfileStoreSnapshot,
  replaceRuntimeAuthProfileStoreSnapshots as replaceRuntimeAuthProfileStoreSnapshotsImpl,
  setRuntimeAuthProfileStoreSnapshot,
} from "./runtime-snapshots.js";
import { savePersistedAuthProfileState } from "./state.js";
import {
  clearLoadedAuthStoreCache,
  readCachedAuthProfileStore,
  writeCachedAuthProfileStore,
} from "./store-cache.js";
import type { AuthProfileStore } from "./types.js";

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
type SaveAuthProfileStoreOptions = {
  filterExternalAuthProfiles?: boolean;
  syncExternalCli?: boolean;
};
type ResolvedExternalCliOverlayOptions = {
  allowKeychainPrompt?: boolean;
  config?: OpenClawConfig;
  externalCliProviderIds?: Iterable<string>;
  externalCliProfileIds?: Iterable<string>;
};
type SyncLockSnapshot = {
  raw: string;
  stat: fs.Stats;
  payload: Record<string, unknown> | null;
};
type ExternalCliSyncResult = {
  store: AuthProfileStore;
  cacheable: boolean;
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
