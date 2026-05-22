// AUTH STUB - implementation removed

import { resolveAgentDir, resolveDefaultAgentId } from "../../agents/agent-scope.js";
import {
  type AuthProfileStore,
  externalCliDiscoveryForProviderAuth,
  ensureAuthProfileStore,
  resolveAuthStatePathForDisplay,
  setAuthProfileOrder,
} from "../../agents/auth-profiles.js";
import { normalizeProviderId } from "../../agents/model-selection.js";
import { formatCliCommand } from "../../cli/command-format.js";
import { type RuntimeEnv, writeRuntimeJson } from "../../runtime.js";
import { normalizeStringEntries } from "../../shared/string-normalization.js";
import { shortenHomePath } from "../../utils.js";
import { loadModelsConfig } from "./load-config.js";
import { resolveKnownAgentId } from "./shared.js";

export const modelsAuthOrderClearCommand: any = undefined as any;
export const modelsAuthOrderGetCommand: any = undefined as any;
export const modelsAuthOrderSetCommand: any = undefined as any;
