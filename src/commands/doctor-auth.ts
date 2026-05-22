// AUTH/MCP STUB - implementation removed

import {
  buildAuthHealthSummary,
  DEFAULT_OAUTH_WARN_MS,
  formatRemainingShort,
} from "../agents/auth-health.js";
import {
  type AuthCredentialReasonCode,
  ensureAuthProfileStore,
  hasAnyAuthProfileStoreSource,
  resolveApiKeyForProfile,
  resolveProfileUnusableUntilForDisplay,
} from "../agents/auth-profiles.js";
import { formatAuthDoctorHint } from "../agents/auth-profiles/doctor.js";
import {
  buildOAuthRefreshFailureLoginCommand,
  classifyOAuthRefreshFailure,
  type OAuthRefreshFailureReason,
} from "../agents/auth-profiles/oauth-refresh-failure.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { formatErrorMessage } from "../infra/errors.js";
import { note } from "../terminal/note.js";
import { isRecord } from "../utils.js";
import type { DoctorPrompter } from "./doctor-prompter.js";
import { buildProviderAuthRecoveryHint } from "./provider-auth-guidance.js";

type AuthIssue = {
  profileId: string;
  provider: string;
  status: string;
  reasonCode?: AuthCredentialReasonCode;
  remainingMs?: number;
};

export const formatOAuthRefreshFailureDoctorLine: any = undefined as any;
export const noteAuthProfileHealth: any = undefined as any;
export const noteLegacyCodexProviderOverride: any = undefined as any;
export const resolveUnusableProfileHint: any = undefined as any;
