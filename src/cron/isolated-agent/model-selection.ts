// CRON STUB - implementation removed

import type { AgentConfig } from "../../config/types.agents.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { CronJob } from "../types.js";
import {
  DEFAULT_MODEL,
  DEFAULT_PROVIDER,
  getModelRefStatus,
  loadModelCatalog,
  normalizeModelSelection,
  resolveAllowedModelRef,
  resolveConfiguredModelRef,
  resolveHooksGmailModel,
  resolveSubagentModelConfigSelectionResult,
} from "./run-model-selection.runtime.js";

type CronSessionModelOverrides = {
  modelOverride?: string;
  providerOverride?: string;
};
type CronModelSelectionSource = "default" | "subagent" | "agent" | "hook" | "payload" | "session";
export type ResolveCronModelSelectionParams = {
  cfg: OpenClawConfig;
  cfgWithAgentDefaults: OpenClawConfig;
  agentConfigOverride?: Pick<AgentConfig, "model" | "subagents">;
  sessionEntry: CronSessionModelOverrides;
  payload: CronJob["payload"];
  isGmailHook: boolean;
  agentId?: string;
};
export type ResolveCronModelSelectionResult =
  | {
      ok: true;
      provider: string;
      model: string;
      modelSource: CronModelSelectionSource;
    }

export const resolveCronModelSelection: any = undefined as any;
