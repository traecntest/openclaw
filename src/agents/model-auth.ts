// AUTH/MCP STUB - implementation removed

import path from "node:path";
import { type Api, type Model } from "@earendil-works/pi-ai";
import { formatCliCommand } from "../cli/command-format.js";
import { getRuntimeConfigSnapshot } from "../config/config.js";
import type { ModelProviderAuthMode, ModelProviderConfig } from "../config/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { coerceSecretRef } from "../config/types.secrets.js";
import { getShellEnvAppliedKeys } from "../infra/shell-env.js";
import { createSubsystemLogger } from "../logging/subsystem.js";
import {
  buildProviderMissingAuthMessageWithPlugin,
  resolveProviderSyntheticAuthWithPlugin,
  shouldDeferProviderSyntheticProfileAuthWithPlugin,
} from "../plugins/provider-runtime.js";
import { resolveOwningPluginIdsForProvider } from "../plugins/providers.js";
import { resolveDefaultSecretProviderAlias } from "../secrets/ref-contract.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalLowercaseString,
} from "../shared/string-coerce.js";
import { normalizeOptionalSecretInput } from "../utils/normalize-secret-input.js";
import {
  type AuthProfileCredential,
  type AuthProfileStore,
  externalCliDiscoveryForProviderAuth,
  ensureAuthProfileStore,
  isConfiguredAwsSdkAuthProfileForProvider,
  listProfilesForProvider,
  resolveApiKeyForProfile,
  resolveAuthProfileOrder,
  resolveAuthStorePathForDisplay,
} from "./auth-profiles.js";
import * as cliCredentials from "./cli-credentials.js";
import { resolveEnvApiKey, type EnvApiKeyResult } from "./model-auth-env.js";
import {
  CUSTOM_LOCAL_AUTH_MARKER,
  isKnownEnvApiKeyMarker,
  isNonSecretApiKeyMarker,
  NON_ENV_SECRETREF_MARKER,
} from "./model-auth-markers.js";
import { type ResolvedProviderAuth } from "./model-auth-runtime-shared.js";
import { normalizeProviderId } from "./model-selection.js";

export type ProviderCredentialPrecedence = "profile-first" | "env-first";
type ResolvedCustomProviderApiKey = {
  apiKey: string;
  source: string;
};
type SyntheticProviderAuthResolution = {
  auth?: ResolvedProviderAuth;
  blockedOnManagedSecretRef?: boolean;
};
export type ModelAuthMode = "api-key" | "oauth" | "token" | "mixed" | "aws-sdk" | "unknown";

export {
  ensureAuthProfileStore,
  ensureAuthProfileStoreWithoutExternalProfiles,
  resolveAuthProfileOrder,
} from "./auth-profiles.js";
export {
  formatMissingAuthError,
  requireApiKey,
  resolveAwsSdkEnvVarName,
} from "./model-auth-runtime-shared.js";
export type { ResolvedProviderAuth } from "./model-auth-runtime-shared.js";
export { resolveEnvApiKey } from "./model-auth-env.js";
export type { EnvApiKeyResult } from "./model-auth-env.js";

export const applyAuthHeaderOverride: any = undefined as any;
export const applyLocalNoAuthHeaderOverride: any = undefined as any;
export const getApiKeyForModel: any = undefined as any;
export const getCustomProviderApiKey: any = undefined as any;
export const hasAvailableAuthForProvider: any = undefined as any;
export const hasRuntimeAvailableProviderAuth: any = undefined as any;
export const hasSyntheticLocalProviderAuthConfig: any = undefined as any;
export const hasUsableCustomProviderApiKey: any = undefined as any;
export const resolveApiKeyForProvider: any = undefined as any;
export const resolveModelAuthMode: any = undefined as any;
export const resolveUsableCustomProviderApiKey: any = undefined as any;
export const shouldPreferExplicitConfigApiKeyAuth: any = undefined as any;
