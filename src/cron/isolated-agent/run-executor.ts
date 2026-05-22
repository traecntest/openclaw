// CRON STUB - implementation removed

import type { BootstrapContextMode } from "../../agents/bootstrap-files.js";
import { resolveCliRuntimeExecutionProvider } from "../../agents/model-runtime-aliases.js";
import type { SkillSnapshot } from "../../agents/skills.js";
import { normalizeToolList } from "../../agents/tool-policy.js";
import type { ThinkLevel, VerboseLevel } from "../../auto-reply/thinking.js";
import type { AgentDefaultsConfig } from "../../config/types.agent-defaults.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { SourceDeliveryPlan } from "../../infra/outbound/source-delivery-plan.js";
import { createLazyImportLoader } from "../../shared/lazy-promise.js";
import type { CronAgentExecutionPhaseUpdate, CronJob } from "../types.js";
import {
  resolveCronChannelOutputPolicy,
  resolveCurrentChannelTarget,
} from "./channel-output-policy.js";
import { resolveCronPayloadOutcome } from "./helpers.js";
import {
  getCliSessionId,
  ensureSelectedAgentHarnessPlugin,
  isCliProvider,
  LiveSessionModelSwitchError,
  logWarn,
  normalizeVerboseLevel,
  registerAgentRunContext,
  resolveBootstrapWarningSignaturesSeen,
  resolveCronAgentLane,
  resolveSessionTranscriptPath,
  runCliAgent,
  runWithModelFallback,
} from "./run-execution.runtime.js";
import { resolveCronFallbacksOverride } from "./run-fallback-policy.js";
import type {
  CronLiveSelection,
  MutableCronSession,
  PersistCronSessionEntry,
} from "./run-session-state.js";
import { syncCronSessionLiveSelection } from "./run-session-state.js";
import { isLikelyInterimCronMessage } from "./subagent-followup-hints.js";

type AgentTurnPayload = Extract<CronJob["payload"], { kind: "agentTurn" }> | null;
type CronPromptRunResult = Awaited<ReturnType<typeof runCliAgent>>;
type CronEmbeddedRuntime = typeof import("./run-embedded.runtime.js");
type CronSubagentRegistryRuntime = typeof import("./run-subagent-registry.runtime.js");
export type CronExecutionResult = {
  runResult: CronPromptRunResult;
  fallbackProvider: string;
  fallbackModel: string;
  runStartedAt: number;
  runEndedAt: number;
  liveSelection: CronLiveSelection;
};

export const isCommandStyleCronMessage: any = undefined as any;
export const createCronPromptExecutor: any = undefined as any;
export const executeCronRun: any = undefined as any;
