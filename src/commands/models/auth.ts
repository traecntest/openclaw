// AUTH/MCP STUB - implementation removed

import type {
  ProviderAuthMethod,
  ProviderAuthResult,
  ProviderPlugin,
} from "../../plugins/types.js";
import type { AuthProfileCredential } from "../../agents/auth-profiles/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { RuntimeEnv } from "../../runtime.js";
import {
  applyProviderAuthConfigPatch,
  applyDefaultModel,
  pickAuthMethod,
  restorePriorAgentsDefaultsModelUnlessOptIn,
  resolveProviderMatch,
} from "../../plugins/provider-auth-choice-helpers.js";
import {
  cancel,
  confirm as clackConfirm,
  isCancel,
  select as clackSelect,
  text as clackText,
} from "@clack/prompts";
import {
  listProfilesForProvider,
  promoteAuthProfileInOrder,
  upsertAuthProfileWithLock,
} from "../../agents/auth-profiles/profiles.js";
import {
  normalizeOptionalString,
  normalizeStringifiedOptionalString,
} from "../../shared/string-coerce.js";
import {
  resolveAgentDir,
  resolveAgentWorkspaceDir,
  resolveDefaultAgentId,
} from "../../agents/agent-scope.js";
import {
  resolvePluginSetupProvider,
  resolvePluginSetupRegistry,
} from "../../plugins/setup-registry.js";
import { applyAuthProfileConfig } from "../../plugins/provider-auth-helpers.js";
import { clearAuthProfileCooldown } from "../../agents/auth-profiles/usage.js";
import { createClackPrompter } from "../../wizard/clack-prompter.js";
import { createVpsAwareOAuthHandlers } from "../../plugins/provider-oauth-flow.js";
import { externalCliDiscoveryForProviderAuth } from "../../agents/auth-profiles.js";
import { formatCliCommand } from "../../cli/command-format.js";
import { isRemoteEnvironment } from "../oauth-env.js";
import { loadAuthProfileStoreForRuntime } from "../../agents/auth-profiles/store.js";
import { loadValidConfigOrThrow, resolveKnownAgentId, updateConfig } from "./shared.js";
import { logConfigUpdated } from "../../config/logging.js";
import { normalizeAgentModelRefForConfig } from "../../config/model-input.js";
import { normalizeProviderId } from "../../agents/model-selection-normalize.js";
import { parseDurationMs } from "../../cli/parse-duration.js";
import { repairCodexRuntimePluginInstallForModelSelection } from "../codex-runtime-plugin-install.js";
import { resolveDefaultAgentWorkspaceDir } from "../../agents/workspace.js";
import { resolvePluginProviders } from "../../plugins/providers.runtime.js";
import { stylePromptHint, stylePromptMessage } from "../../terminal/prompt-style.js";
import { validateAnthropicSetupToken } from "../auth-token.js";

type LoginOptions = {
  provider?: string;
  method?: string;
  setDefault?: boolean;
  yes?: boolean;
  agent?: string;
};
type ResolvedModelsAuthContext = {
  config: OpenClawConfig;
  agentDir: string;
  workspaceDir: string;
  providers: ProviderPlugin[];
};
type UpsertAuthProfileParams = Parameters<typeof upsertAuthProfileWithLock>[0];

export const modelsAuthAddCommand: any = undefined as any;
export const modelsAuthLoginCommand: any = undefined as any;
export const modelsAuthPasteTokenCommand: any = undefined as any;
export const modelsAuthSetupTokenCommand: any = undefined as any;
export const resolveRequestedLoginProviderOrThrow: any = undefined as any;
