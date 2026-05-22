// AUTH/MCP STUB - implementation removed

import type { ApiKeyCredential } from "../../../agents/auth-profiles/types.js";
import type { AuthChoice, OnboardOptions } from "../../onboard-types.js";
import type { OpenClawConfig } from "../../../config/types.openclaw.js";
import type { RuntimeEnv } from "../../../runtime.js";
import type { SecretInput } from "../../../config/types.secrets.js";
import {
  applyCustomApiConfig,
  CustomApiError,
  parseNonInteractiveCustomApiFlags,
  resolveCustomProviderId,
} from "../../onboard-custom-config.js";
import {
  formatDeprecatedNonInteractiveAuthChoiceError,
  isDeprecatedAuthChoice,
} from "../../auth-choice-legacy.js";
import { applyNonInteractivePluginProviderChoice } from "./auth-choice.plugin-providers.js";
import { formatCliCommand } from "../../../cli/command-format.js";
import { formatErrorMessage } from "../../../infra/errors.js";
import { normalizeApiKeyTokenProviderAuthChoice } from "../../auth-choice.apply.api-providers.js";
import { normalizeSecretInputModeInput } from "../../auth-choice.apply-helpers.js";
import { resolveDefaultSecretProviderAlias } from "../../../secrets/ref-contract.js";
import { resolveManifestDeprecatedProviderAuthChoice } from "../../../plugins/provider-auth-choices.js";
import { resolveNonInteractiveApiKey } from "../api-keys.js";

type ResolvedNonInteractiveApiKey = NonNullable<
  Awaited<ReturnType<typeof resolveNonInteractiveApiKey>>
>;

export const applyNonInteractiveAuthChoice: any = undefined as any;
