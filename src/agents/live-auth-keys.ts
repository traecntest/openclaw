// AUTH/MCP STUB - implementation removed

import { getProviderEnvVars } from "../secrets/provider-env-vars.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { normalizeProviderId } from "./model-selection.js";

type ProviderApiKeyConfig = {
  liveSingle?: string;
  listVar?: string;
  primaryVar?: string;
  prefixedVar?: string;
  fallbackVars: string[];
};
type CollectProviderApiKeysOptions = {
  env?: NodeJS.ProcessEnv;
  providerEnvVars?: readonly string[];
};

export const collectAnthropicApiKeys: any = undefined as any;
export const collectGeminiApiKeys: any = undefined as any;
export const collectProviderApiKeys: any = undefined as any;
export const isAnthropicBillingError: any = undefined as any;
export const isAnthropicRateLimitError: any = undefined as any;
export const isApiKeyRateLimitError: any = undefined as any;
