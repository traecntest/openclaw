// AUTH/MCP STUB - implementation removed

import type { GatewayRequestContext, GatewayRequestHandlers } from "./types.js";
import type { OpenClawConfig } from "../../config/config.js";
import type { UsageProviderId, UsageWindow } from "../../infra/provider-usage.types.js";
import {
  ensureAuthProfileStore,
  ensureAuthProfileStoreWithoutExternalProfiles,
  externalCliDiscoveryForConfigStatus,
  listProfilesForProvider,
  removeProviderAuthProfilesWithLock,
  resolvePersistedAuthProfileOwnerAgentDir,
} from "../../agents/auth-profiles.js";
import {
  type AuthHealthSummary,
  type AuthProfileHealthStatus,
  type AuthProviderHealth,
  type AuthProviderHealthStatus,
  buildAuthHealthSummary,
  formatRemainingShort,
} from "../../agents/auth-health.js";
import { ErrorCodes, errorShape } from "../protocol/index.js";
import { PROVIDER_LABELS, resolveUsageProviderId } from "../../infra/provider-usage.shared.js";
import { abortChatRunsForProvider, type ChatAbortOps } from "../chat-abort.js";
import { createSubsystemLogger } from "../../logging/subsystem.js";
import { formatForLog } from "../ws-log.js";
import { isSecretRef } from "../../config/types.secrets.js";
import { loadProviderUsageSummary } from "../../infra/provider-usage.load.js";
import { normalizeProviderId } from "../../agents/provider-id.js";
import { refreshActiveSecretsRuntimeSnapshot } from "../../secrets/runtime.js";
import { resolveDefaultAgentDir } from "../../agents/agent-scope.js";
import { resolveProviderIdForAuth } from "../../agents/provider-auth-aliases.js";

export type ModelAuthExpiry = {
  /** Absolute expiry timestamp, ms since epoch. */
  at: number;
  /** Remaining time in ms (negative if already expired). */
  remainingMs: number;
  /** Human-readable remaining time (e.g. "10d", "2h", "45m"). */
  label: string;
};
export type ModelAuthLogoutResult = {
  provider: string;
  removedProfiles: string[];
  abortedRunIds: string[];
};
export type ModelAuthStatusProfile = {
  profileId: string;
  type: "oauth" | "token" | "api_key";
  status: AuthProfileHealthStatus;
  expiry?: ModelAuthExpiry;
};
export type ModelAuthStatusProvider = {
  provider: string;
  displayName: string;
  status: AuthProviderHealthStatus;
  expiry?: ModelAuthExpiry;
  profiles: ModelAuthStatusProfile[];
  usage?: {
    windows: UsageWindow[];
    plan?: string;
  };
};
export type ModelAuthStatusResult = {
  /** Snapshot build time, ms since epoch. 0 = never loaded (UI fallback sentinel). */
  ts: number;
  providers: ModelAuthStatusProvider[];
};

export const aggregateOAuthStatus: any = undefined as any;
export const invalidateModelAuthStatusCache: any = undefined as any;
export const modelsAuthStatusHandlers: any = undefined as any;
