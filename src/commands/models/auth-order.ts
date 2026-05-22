// AUTH/MCP STUB - implementation removed

import {
  type AuthProfileStore,
  externalCliDiscoveryForProviderAuth,
  ensureAuthProfileStore,
  resolveAuthStatePathForDisplay,
  setAuthProfileOrder,
} from "../../agents/auth-profiles.js";
import { formatCliCommand } from "../../cli/command-format.js";
import { loadModelsConfig } from "./load-config.js";
import { normalizeProviderId } from "../../agents/model-selection.js";
import { normalizeStringEntries } from "../../shared/string-normalization.js";
import { resolveAgentDir, resolveDefaultAgentId } from "../../agents/agent-scope.js";
import { resolveKnownAgentId } from "./shared.js";
import { shortenHomePath } from "../../utils.js";
import { type RuntimeEnv, writeRuntimeJson } from "../../runtime.js";

export const modelsAuthOrderClearCommand: any = undefined as any;
export const modelsAuthOrderGetCommand: any = undefined as any;
export const modelsAuthOrderSetCommand: any = undefined as any;
