// AUTH/MCP STUB - implementation removed

import type { AgentModelConfig } from "../config/types.agents-shared.js";
import type { ModelProviderConfig } from "../config/types.models.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ProviderAuthMethod, ProviderPlugin } from "./types.js";
import {
  normalizeAgentModelMapForConfig,
  normalizeAgentModelRefForConfig,
} from "../config/model-input.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalLowercaseString,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { normalizeConfiguredProviderCatalogModelId } from "../agents/model-ref-shared.js";
import { normalizeProviderConfigForConfigDefaults } from "../config/provider-policy.js";
import { normalizeProviderId } from "../agents/model-selection.js";

export const applyDefaultModel: any = undefined as any;
export const applyProviderAuthConfigPatch: any = undefined as any;
export const pickAuthMethod: any = undefined as any;
export const resolveProviderMatch: any = undefined as any;
export const restorePriorAgentsDefaultsModelUnlessOptIn: any = undefined as any;
