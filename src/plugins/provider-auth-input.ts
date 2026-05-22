// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.js";
import type { SecretInput } from "../config/types.secrets.js";
import type { SecretInputMode } from "./provider-auth-types.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import {
  extractEnvVarFromSourceLabel,
  promptSecretRefForSetup,
  resolveRefFallbackInput,
} from "./provider-auth-ref.js";
import {
  normalizeOptionalLowercaseString,
  normalizeStringifiedOptionalString,
} from "../shared/string-coerce.js";
import { resolveEnvApiKey } from "../agents/model-auth-env.js";
import { resolveSecretInputModeForEnvSelection } from "./provider-auth-mode.js";

export {
  extractEnvVarFromSourceLabel,
  promptSecretRefForSetup,
  resolveRefFallbackInput,
  type SecretRefSetupPromptCopy,
} from "./provider-auth-ref.js";
export {
  resolveSecretInputModeForEnvSelection,
  type SecretInputModePromptCopy,
} from "./provider-auth-mode.js";

export const ensureApiKeyFromEnvOrPrompt: any = undefined as any;
export const ensureApiKeyFromOptionEnvOrPrompt: any = undefined as any;
export const formatApiKeyPreview: any = undefined as any;
export const maybeApplyApiKeyFromOption: any = undefined as any;
export const normalizeApiKeyInput: any = undefined as any;
export const normalizeSecretInputModeInput: any = undefined as any;
export const normalizeTokenProviderInput: any = undefined as any;
export const validateApiKeyInput: any = undefined as any;
