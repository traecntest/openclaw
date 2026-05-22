// CRON STUB - implementation removed

import { readLatestAssistantReply, waitForAgentRunsToDrain } from "../../agents/run-wait.js";
import { listDescendantRunsForRequester } from "../../agents/subagent-registry-read.js";
import { SILENT_REPLY_TOKEN } from "../../auto-reply/tokens.js";
import { isLikelyInterimCronMessage } from "./subagent-followup-hints.js";

export const readDescendantSubagentFallbackReply: any = undefined as any;
export const waitForDescendantSubagentSummary: any = undefined as any;
