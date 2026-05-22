// AUTH/MCP STUB - implementation removed

import { resolveEnvApiKey } from "../agents/model-auth-env.js";
import type { OpenClawConfig } from "../config/types.js";
import type { SecretInput } from "../config/types.secrets.js";
import {
  normalizeOptionalLowercaseString,
  normalizeStringifiedOptionalString,
} from "../shared/string-coerce.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import { resolveSecretInputModeForEnvSelection } from "./provider-auth-mode.js";
import {
  extractEnvVarFromSourceLabel,
  promptSecretRefForSetup,
  resolveRefFallbackInput,
} from "./provider-auth-ref.js";
import type { SecretInputMode } from "./provider-auth-types.js";

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

