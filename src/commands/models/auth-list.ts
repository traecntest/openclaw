// AUTH/MCP STUB - implementation removed

import {
  ensureAuthProfileStore,
  externalCliDiscoveryForProviderAuth,
  resolveAuthProfileDisplayLabel,
  resolveAuthStatePathForDisplay,
  type AuthProfileCredential,
  type AuthProfileStore,
  type ProfileUsageStats,
} from "../../agents/auth-profiles.js";
import { loadModelsConfig } from "./load-config.js";
import { normalizeProviderId } from "../../agents/model-selection.js";
import { resolveAgentDir, resolveDefaultAgentId } from "../../agents/agent-scope.js";
import { resolveKnownAgentId } from "./shared.js";
import { shortenHomePath } from "../../utils.js";
import { type RuntimeEnv, writeRuntimeJson } from "../../runtime.js";

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
