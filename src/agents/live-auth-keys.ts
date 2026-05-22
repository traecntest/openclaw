// AUTH/MCP STUB - implementation removed

import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { getProviderEnvVars } from "../secrets/provider-env-vars.js";
import { normalizeProviderId } from "./model-selection.js";

type CollectProviderApiKeysOptions = {
  env?: NodeJS.ProcessEnv;
  providerEnvVars?: readonly string[];
};
type ProviderApiKeyConfig = {
  liveSingle?: string;
  listVar?: string;
  primaryVar?: string;
  prefixedVar?: string;
  fallbackVars: string[];
};

export const collectAnthropicApiKeys: any = undefined as any;
export const collectGeminiApiKeys: any = undefined as any;
export const collectProviderApiKeys: any = undefined as any;
export const isAnthropicBillingError: any = undefined as any;
export const isAnthropicRateLimitError: any = undefined as any;
export const isApiKeyRateLimitError: any = undefined as any;
