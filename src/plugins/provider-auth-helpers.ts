// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import type { OAuthCredentials } from "@earendil-works/pi-ai";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { SecretInputMode } from "./provider-auth-types.js";
import {
  coerceSecretRef,
  DEFAULT_SECRET_PROVIDER_ALIAS,
  type SecretInput,
  type SecretRef,
} from "../config/types.secrets.js";
import { buildAuthProfileId } from "../agents/auth-profiles/identity.js";
import { getProviderEnvVars } from "../secrets/provider-env-vars.js";
import { normalizeSecretInput } from "../utils/normalize-secret-input.js";
import { resolveDefaultAgentDir } from "../agents/agent-scope-config.js";
import { resolveProviderIdForAuth } from "../agents/provider-auth-aliases.js";
import { resolveStateDir } from "../config/paths.js";
import { upsertAuthProfile, upsertAuthProfileWithLock } from "../agents/auth-profiles/profiles.js";

export type ApiKeyStorageOptions = {
  secretInputMode?: SecretInputMode;
  config?: OpenClawConfig;
};
export type WriteOAuthCredentialsOptions = {
  syncSiblingAgents?: boolean;
  profileName?: string;
  displayName?: string;
};
type UpsertAuthProfileParams = Parameters<typeof upsertAuthProfileWithLock>[0];

export const applyAuthProfileConfig: any = undefined as any;
export const buildApiKeyCredential: any = undefined as any;
export const upsertApiKeyProfile: any = undefined as any;
export const writeOAuthCredentials: any = undefined as any;
