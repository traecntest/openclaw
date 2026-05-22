// AUTH STUB - implementation removed

import { ensureAuthProfileStore } from "../agents/auth-profiles.js";
import { resolveDefaultAgentWorkspaceDir } from "../agents/workspace.js";
import { formatCliCommand } from "../cli/command-format.js";
import type { OpenClawConfig, GatewayAuthConfig } from "../config/config.js";
import { isSecretRef, type SecretInput } from "../config/types.secrets.js";
import type { RuntimeEnv } from "../runtime.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import { promptAuthChoiceGrouped } from "./auth-choice-prompt.js";
import { applyAuthChoice, resolvePreferredProviderForAuthChoice } from "./auth-choice.js";
import {
  applyModelAllowlist,
  applyModelFallbacksFromSelection,
  applyPrimaryModel,
  promptDefaultModel,
  promptModelAllowlist,
} from "./model-picker.js";
import { loadStaticManifestCatalogRowsForList } from "./models/list.manifest-catalog.js";
import { promptCustomApiConfig } from "./onboard-custom.js";
import { randomToken } from "./random-token.js";

export const buildGatewayAuthConfig: any = undefined as any;
export const promptAuthConfig: any = undefined as any;
