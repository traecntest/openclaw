// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  externalCliDiscoveryForProviderAuth,
  ensureAuthProfileStore,
  ensureAuthProfileStoreWithoutExternalProfiles,
  listProfilesForProvider,
  type AuthProfileStore,
} from "./auth-profiles.js";
import { hasRuntimeAvailableProviderAuth } from "./model-auth.js";
import { normalizeProviderId } from "./model-selection.js";

export const createProviderAuthChecker: any = undefined as any;
export const hasAuthForModelProvider: any = undefined as any;
