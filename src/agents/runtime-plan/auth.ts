// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { shouldRouteOpenAIPiThroughCodexAuthProvider } from "../openai-codex-routing.js";
import { normalizeEmbeddedAgentRuntime } from "../pi-embedded-runner/runtime.js";
import { resolveProviderIdForAuth } from "../provider-auth-aliases.js";
import type { AgentRuntimeAuthPlan } from "./types.js";

export const buildAgentRuntimeAuthPlan: any = undefined as any;
