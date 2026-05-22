import { applyAuthProfileConfig, buildApiKeyCredential } from "./provider-auth-helpers.js";
import {
  ensureApiKeyFromOptionEnvOrPrompt,
  normalizeApiKeyInput,
  validateApiKeyInput,
} from "./provider-auth-input.js";
import { applyPrimaryModel } from "./provider-model-primary.js";

export const providerApiKeyAuthRuntime = undefined as any;
