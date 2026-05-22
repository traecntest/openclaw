// AUTH STUB - implementation removed

import { resolveProviderSyntheticAuthWithPlugin } from "../plugins/provider-runtime.js";
import { resolveRuntimeSyntheticAuthProviderRefs } from "../plugins/synthetic-auth.runtime.js";
import type { ExternalCliAuthDiscovery } from "./auth-profiles/external-cli-discovery.js";
import {
  ensureAuthProfileStore,
  ensureAuthProfileStoreWithoutExternalProfiles,
  loadAuthProfileStoreWithoutExternalProfiles,
  loadAuthProfileStoreForRuntime,
  loadAuthProfileStoreForSecretsRuntime,
} from "./auth-profiles/store.js";
import { resolvePiCredentialMapFromStore, type PiCredentialMap } from "./pi-auth-credentials.js";
import {
  addEnvBackedPiCredentials,
  type PiDiscoveryAuthLookupOptions,
} from "./pi-auth-discovery-core.js";

export type DiscoverAuthStorageOptions = {
  externalCli?: ExternalCliAuthDiscovery;
  readOnly?: boolean;
  skipExternalAuthProfiles?: boolean;
  skipCredentials?: boolean;
  syntheticAuthProviderRefs?: Iterable<string>;
} & PiDiscoveryAuthLookupOptions;

export const resolvePiCredentialsForDiscovery: any = undefined as any;
