// AUTH/MCP STUB - implementation removed

import type { AgentRuntimeAuthPlan } from "./types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { normalizeEmbeddedAgentRuntime } from "../pi-embedded-runner/runtime.js";
import { resolveProviderIdForAuth } from "../provider-auth-aliases.js";
import { shouldRouteOpenAIPiThroughCodexAuthProvider } from "../openai-codex-routing.js";

export const buildAgentRuntimeAuthPlan: any = undefined as any;
