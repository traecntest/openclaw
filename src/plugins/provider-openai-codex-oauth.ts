// AUTH/MCP STUB - implementation removed

import type { OAuthPrompt } from "./provider-oauth-flow.js";
import type { RuntimeEnv } from "../runtime.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import {
  formatOpenAIOAuthTlsPreflightFix,
  runOpenAIOAuthTlsPreflight,
} from "./provider-openai-codex-oauth-tls.js";
import { createVpsAwareOAuthHandlers } from "./provider-oauth-flow.js";
import { ensureGlobalUndiciEnvProxyDispatcher } from "../infra/net/undici-global-dispatcher.js";
import { formatErrorMessage } from "../infra/errors.js";
import { loginOpenAICodex, type OAuthCredentials } from "@earendil-works/pi-ai/oauth";

type OpenAICodexOAuthFailureCode =
  | "callback_timeout"
  | "callback_validation_failed"
  | "unsupported_region";

export const loginOpenAICodexOAuth: any = undefined as any;
