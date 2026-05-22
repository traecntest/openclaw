// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig, GatewayAuthConfig } from "../config/config.js";
import type { RuntimeEnv } from "../runtime.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import {
  applyModelAllowlist,
  applyModelFallbacksFromSelection,
  applyPrimaryModel,
  promptDefaultModel,
  promptModelAllowlist,
} from "./model-picker.js";
import { applyAuthChoice, resolvePreferredProviderForAuthChoice } from "./auth-choice.js";
import { ensureAuthProfileStore } from "../agents/auth-profiles.js";
import { formatCliCommand } from "../cli/command-format.js";
import { isSecretRef, type SecretInput } from "../config/types.secrets.js";
import { loadStaticManifestCatalogRowsForList } from "./models/list.manifest-catalog.js";
import { promptAuthChoiceGrouped } from "./auth-choice-prompt.js";
import { promptCustomApiConfig } from "./onboard-custom.js";
import { randomToken } from "./random-token.js";
import { resolveDefaultAgentWorkspaceDir } from "../agents/workspace.js";

type GatewayAuthChoice = "token" | "password" | "trusted-proxy";
type ProviderChoiceModelPrompt = {
  provider?: string;
  allowedKeys?: string[];
  initialSelections?: string[];
  message?: string;
  loadCatalog?: boolean;
};

export const buildGatewayAuthConfig: any = undefined as any;
export const promptAuthConfig: any = undefined as any;
