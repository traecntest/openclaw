// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import { buildProviderAuthRecoveryHint } from "./provider-auth-guidance.js";
import { ensureAuthProfileStore, listProfilesForProvider } from "../agents/auth-profiles.js";
import { hasUsableCustomProviderApiKey, resolveEnvApiKey } from "../agents/model-auth.js";
import { listOpenAIAuthProfileProvidersForAgentRuntime } from "../agents/openai-codex-routing.js";
import { loadModelCatalog } from "../agents/model-catalog.js";
import { resolveAgentHarnessPolicy } from "../agents/harness/policy.js";
import { resolveDefaultModelForAgent } from "../agents/model-selection.js";

export const warnIfModelConfigLooksOff: any = undefined as any;
