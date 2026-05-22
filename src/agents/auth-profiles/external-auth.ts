// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { ProviderExternalAuthProfile } from "../../plugins/provider-external-auth.types.js";
import { resolveExternalAuthProfilesWithPlugins } from "../../plugins/provider-runtime.js";
import { cloneAuthProfileStore } from "./clone.js";
import { CLAUDE_CLI_PROFILE_ID, MINIMAX_CLI_PROFILE_ID } from "./constants.js";
import * as externalCliSync from "./external-cli-sync.js";
import {
  areOAuthCredentialsEquivalent,
  overlayRuntimeExternalOAuthProfiles,
  shouldPersistRuntimeExternalOAuthProfile,
  type RuntimeExternalOAuthProfile,
} from "./oauth-shared.js";
import type { AuthProfileStore, OAuthCredential } from "./types.js";

type ExternalAuthProfileMap = Map<string, ProviderExternalAuthProfile>;
type ResolveExternalAuthProfiles = typeof resolveExternalAuthProfilesWithPlugins;
type ExternalCliOverlayOptions = {
  allowKeychainPrompt?: boolean;
  config?: OpenClawConfig;
  externalCliProviderIds?: Iterable<string>;
  externalCliProfileIds?: Iterable<string>;
};

export { testing as __testing };


export const overlayExternalAuthProfiles: any = undefined as any;
export const overlayExternalOAuthProfiles: any = undefined as any;
export const shouldPersistExternalAuthProfile: any = undefined as any;
export const shouldPersistExternalOAuthProfile: any = undefined as any;
export const syncPersistedExternalCliAuthProfiles: any = undefined as any;
export const testing: any = undefined as any;
