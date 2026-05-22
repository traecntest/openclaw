// AUTH/MCP STUB - implementation removed

import type {
  ProviderAuthOptionBag,
  ProviderNonInteractiveApiKeyCredentialParams,
  ProviderResolveNonInteractiveApiKeyParams,
} from "../../../plugins/types.js";
import type { ApiKeyCredential } from "../../../agents/auth-profiles/types.js";
import type { OnboardOptions } from "../../onboard-types.js";
import type { OpenClawConfig } from "../../../config/types.openclaw.js";
import type { RuntimeEnv } from "../../../runtime.js";
import {
  CODEX_RUNTIME_PLUGIN_ID,
  ensureCodexRuntimePluginForModelSelection,
} from "../../codex-runtime-plugin-install.js";
import {
  resolveAgentDir,
  resolveDefaultAgentId,
  resolveAgentWorkspaceDir,
} from "../../../agents/agent-scope.js";
import { createLazyRuntimeSurface } from "../../../shared/lazy-runtime.js";
import { createNonInteractiveLoggingPrompter } from "../../non-interactive-prompter.js";
import { enablePluginInConfig } from "../../../plugins/enable.js";
import { resolveAgentModelPrimaryValue } from "../../../config/model-input.js";
import { resolveDefaultAgentWorkspaceDir } from "../../../agents/workspace.js";
import { resolveManifestProviderAuthChoice } from "../../../plugins/provider-auth-choices.js";
import { resolvePreferredProviderForAuthChoice } from "../../../plugins/provider-auth-choice-preference.js";

export const applyNonInteractivePluginProviderChoice: any = undefined as any;
