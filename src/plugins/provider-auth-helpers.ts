// AUTH STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import type { OAuthCredentials } from "@earendil-works/pi-ai";
import { resolveDefaultAgentDir } from "../agents/agent-scope-config.js";
import { buildAuthProfileId } from "../agents/auth-profiles/identity.js";
import { upsertAuthProfile, upsertAuthProfileWithLock } from "../agents/auth-profiles/profiles.js";
import { resolveProviderIdForAuth } from "../agents/provider-auth-aliases.js";
import { resolveStateDir } from "../config/paths.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  coerceSecretRef,
  DEFAULT_SECRET_PROVIDER_ALIAS,
  type SecretInput,
  type SecretRef,
} from "../config/types.secrets.js";
import { getProviderEnvVars } from "../secrets/provider-env-vars.js";
import { normalizeSecretInput } from "../utils/normalize-secret-input.js";
import type { SecretInputMode } from "./provider-auth-types.js";

export type ApiKeyStorageOptions = {
  secretInputMode?: SecretInputMode;
  config?: OpenClawConfig;
};

export type WriteOAuthCredentialsOptions = {
  syncSiblingAgents?: boolean;
  profileName?: string;
  displayName?: string;
};

export const applyAuthProfileConfig: any = undefined as any;
export const buildApiKeyCredential: any = undefined as any;
export const upsertApiKeyProfile: any = undefined as any;
export const writeOAuthCredentials: any = undefined as any;
