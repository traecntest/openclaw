// AUTH STUB - implementation removed

import { resolveAgentDir, resolveDefaultAgentId } from "../../agents/agent-scope.js";
import {
  ensureAuthProfileStore,
  externalCliDiscoveryForProviderAuth,
  resolveAuthProfileDisplayLabel,
  resolveAuthStatePathForDisplay,
  type AuthProfileCredential,
  type AuthProfileStore,
  type ProfileUsageStats,
} from "../../agents/auth-profiles.js";
import { normalizeProviderId } from "../../agents/model-selection.js";
import { type RuntimeEnv, writeRuntimeJson } from "../../runtime.js";
import { shortenHomePath } from "../../utils.js";
import { loadModelsConfig } from "./load-config.js";
import { resolveKnownAgentId } from "./shared.js";

export const modelsAuthListCommand: any = undefined as any;
