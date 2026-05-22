// AUTH/MCP STUB - implementation removed

import type { SessionEntry } from "../config/sessions.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  externalCliDiscoveryForProviderAuth,
  ensureAuthProfileStore,
  loadAuthProfileStoreWithoutExternalProfiles,
  resolveAuthProfileDisplayLabel,
  resolveAuthProfileOrder,
} from "./auth-profiles.js";
import { isStoredCredentialCompatibleWithAuthProvider } from "./auth-profiles/order.js";
import {
  readClaudeCliCredentialsCached,
  readCodexCliCredentialsCached,
} from "./cli-credentials.js";
import { resolveEnvApiKey, resolveUsableCustomProviderApiKey } from "./model-auth.js";
import { normalizeProviderId } from "./model-selection.js";

export const resolveModelAuthLabel: any = undefined as any;
