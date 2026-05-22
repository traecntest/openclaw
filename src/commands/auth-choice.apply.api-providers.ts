// AUTH/MCP STUB - implementation removed

import type { ApplyAuthChoiceParams, ApplyAuthChoiceResult } from "./auth-choice.apply.types.js";
import type { AuthChoice } from "./onboard-types.js";
import type { ProviderAuthKind } from "../plugins/types.js";
import { normalizeTokenProviderInput } from "./auth-choice.apply-helpers.js";
import { resolvePluginProviders } from "../plugins/provider-auth-choice.runtime.js";
import { resolveProviderMatch } from "../plugins/provider-auth-choice-helpers.js";

export const applyAuthChoiceApiProviders: any = undefined as any;
export const normalizeApiKeyTokenProviderAuthChoice: any = undefined as any;
