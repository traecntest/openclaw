// AUTH/MCP STUB - implementation removed

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

type AuthProfileSummary = {
  id: string;
  provider: string;
  type: AuthProfileCredential["type"];
  label: string;
  email?: string;
  displayName?: string;
  expiresAt?: string;
  cooldownUntil?: string;
  disabledUntil?: string;
};

export const modelsAuthListCommand: any = undefined as any;
