// AUTH/MCP STUB - implementation removed

import type { Api, Model } from "@earendil-works/pi-ai";
import type { RunEmbeddedPiAgentParams } from "./params.js";
import type { ThinkLevel } from "../../../auto-reply/thinking.js";
import {
  RUNTIME_AUTH_REFRESH_MARGIN_MS,
  RUNTIME_AUTH_REFRESH_MIN_DELAY_MS,
  RUNTIME_AUTH_REFRESH_RETRY_MS,
  type RuntimeAuthState,
} from "./helpers.js";
import {
  classifyFailoverReason,
  isFailoverErrorMessage,
  type FailoverReason,
} from "../../pi-embedded-helpers.js";
import {
  formatMissingAuthError,
  getApiKeyForModel,
  type ResolvedProviderAuth,
} from "../../model-auth.js";
import {
  resolveProviderRequestConfig,
  sanitizeRuntimeProviderRequestOverrides,
} from "../../provider-request-config.js";
import {
  type AuthProfileStore,
  isProfileInCooldown,
  resolveProfilesUnavailableReason,
} from "../../auth-profiles.js";
import { FailoverError, resolveFailoverStatus } from "../../failover-error.js";
import { clampRuntimeAuthRefreshDelayMs } from "../../runtime-auth-refresh.js";
import { formatErrorMessage } from "../../../infra/errors.js";
import { prepareProviderRuntimeAuth } from "../../../plugins/provider-runtime.js";
import { shouldAllowCooldownProbeForReason } from "../../failover-policy.js";

type ApiKeyInfo = ResolvedProviderAuth;
type LogLike = {
  debug(message: string): void;
  info(message: string): void;
  warn(message: string): void;
};
type RuntimeApiKeySink = {
  setRuntimeApiKey(provider: string, apiKey: string): void;
};

export const createEmbeddedRunAuthController: any = undefined as any;
