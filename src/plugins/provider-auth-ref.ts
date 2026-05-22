// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.js";
import { isValidEnvSecretRefId, type SecretRef } from "../config/types.secrets.js";
import { formatErrorMessage } from "../infra/errors.js";
import { encodeJsonPointerToken } from "../secrets/json-pointer.js";
import { getProviderEnvVars } from "../secrets/provider-env-vars.js";
import {
  formatExecSecretRefIdValidationMessage,
  isValidExecSecretRefId,
  isValidFileSecretRefId,
  resolveDefaultSecretProviderAlias,
} from "../secrets/ref-contract.js";
import { createLazyImportLoader } from "../shared/lazy-promise.js";
import {
  normalizeOptionalString,
  normalizeStringifiedOptionalString,
} from "../shared/string-coerce.js";
import type { WizardPrompter } from "../wizard/prompts.js";

type SecretRefChoice = "env" | "provider"; // pragma: allowlist secret
export type SecretRefSetupPromptCopy = {
  sourceMessage?: string;
  envVarMessage?: string;
  envVarPlaceholder?: string;
  envVarFormatError?: string;
  envVarMissingError?: (envVar: string) => string;
  noProvidersMessage?: string;
  envValidatedMessage?: (envVar: string) => string;
  providerValidatedMessage?: (provider: string, id: string, source: "file" | "exec") => string;
};

export const extractEnvVarFromSourceLabel: any = undefined as any;
export const promptSecretRefForSetup: any = undefined as any;
export const resolveRefFallbackInput: any = undefined as any;
