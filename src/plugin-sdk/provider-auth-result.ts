// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential } from "../agents/auth-profiles/types.js";
import type { ModelProviderConfig } from "../config/types.models.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ProviderAuthResult } from "../plugins/types.js";
import {
  normalizeAgentModelMapForConfig,
  normalizeAgentModelRefForConfig,
} from "../config/model-input.js";
import { buildAuthProfileId } from "../agents/auth-profiles/identity.js";
import { normalizeConfiguredProviderCatalogModelId } from "../agents/model-ref-shared.js";

export const buildOauthProviderAuthResult: any = undefined as any;
