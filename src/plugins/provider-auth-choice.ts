// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ProviderAuthMethod, ProviderAuthOptionBag, ProviderPlugin } from "./types.js";
import type { RuntimeEnv } from "../runtime.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import {
  applyProviderAuthConfigPatch,
  applyDefaultModel,
  pickAuthMethod,
  resolveProviderMatch,
} from "./provider-auth-choice-helpers.js";
import {
  resolveDefaultAgentId,
  resolveAgentDir,
  resolveAgentWorkspaceDir,
} from "../agents/agent-scope.js";
import {
  resolveManifestProviderAuthChoice,
  type ProviderAuthChoiceMetadata,
} from "./provider-auth-choices.js";
import { applyAuthProfileConfig } from "./provider-auth-helpers.js";
import { createVpsAwareOAuthHandlers } from "./provider-oauth-flow.js";
import { enablePluginInConfig } from "./enable.js";
import { formatLiteralProviderPrefixedModelRef } from "../agents/model-ref-shared.js";
import { isRemoteEnvironment, openUrl } from "./setup-browser.js";
import { normalizeAgentModelRefForConfig } from "../config/model-input.js";
import { resolveDefaultAgentWorkspaceDir } from "../agents/workspace.js";
import { resolveProviderInstallCatalogEntry } from "./provider-install-catalog.js";
import { sanitizeTerminalText } from "../terminal/safe-text.js";
import { t } from "../wizard/i18n/index.js";
import { upsertAuthProfileWithLock } from "../agents/auth-profiles.js";

export type ApplyProviderAuthChoiceParams = {
  authChoice: string;
  config: OpenClawConfig;
  env?: NodeJS.ProcessEnv;
  prompter: WizardPrompter;
  runtime: RuntimeEnv;
  agentDir?: string;
  setDefaultModel: boolean;
  preserveExistingDefaultModel?: boolean;
  agentId?: string;
  opts?: Partial<ProviderAuthOptionBag>;
};
export type ApplyProviderAuthChoiceResult = {
  config: OpenClawConfig;
  agentModelOverride?: string;
  retrySelection?: boolean;
};
export type PluginProviderAuthChoiceOptions = {
  authChoice: string;
  pluginId: string;
  providerId: string;
  methodId?: string;
  label: string;
};
type ProviderAuthChoiceRuntime = typeof import("./provider-auth-choice.runtime.js");
type UpsertAuthProfileParams = Parameters<typeof upsertAuthProfileWithLock>[0];

export { testing as __testing };


export const applyAuthChoiceLoadedPluginProvider: any = undefined as any;
export const applyAuthChoicePluginProvider: any = undefined as any;
export const runProviderPluginAuthMethod: any = undefined as any;
export const testing: any = undefined as any;
