// AUTH STUB - implementation removed

import { loginOpenAICodex, type OAuthCredentials } from "@earendil-works/pi-ai/oauth";
import { formatErrorMessage } from "../infra/errors.js";
import { ensureGlobalUndiciEnvProxyDispatcher } from "../infra/net/undici-global-dispatcher.js";
import type { RuntimeEnv } from "../runtime.js";
import type { WizardPrompter } from "../wizard/prompts.js";
import type { OAuthPrompt } from "./provider-oauth-flow.js";
import { createVpsAwareOAuthHandlers } from "./provider-oauth-flow.js";
import {
  formatOpenAIOAuthTlsPreflightFix,
  runOpenAIOAuthTlsPreflight,
} from "./provider-openai-codex-oauth-tls.js";

export const loginOpenAICodexOAuth: any = undefined as any;
