// AUTH/MCP STUB - implementation removed

import * as childProcess from "node:child_process";
import { createCipheriv, createDecipheriv, createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { resolveOAuthDir, resolveStateDir } from "../../config/paths.js";
import { loadJsonFile } from "../../infra/json-file.js";

const LEGACY_OAUTH_REF_SOURCE = "openclaw-credentials";
const LEGACY_OAUTH_REF_PROVIDER = "openai-codex";
const LEGACY_OAUTH_SECRET_DIRNAME = "auth-profiles";
const LEGACY_OAUTH_SECRET_VERSION = 1;
const LEGACY_OAUTH_SECRET_ALGORITHM = "aes-256-gcm";
const LEGACY_OAUTH_SECRET_KEY_ENV = "OPENCLAW_AUTH_PROFILE_SECRET_KEY";
const LEGACY_OAUTH_SECRET_KEYCHAIN_SERVICE = "OpenClaw Auth Profile Secrets";
const LEGACY_OAUTH_SECRET_KEYCHAIN_ACCOUNT = "oauth-profile-master-key";
const LEGACY_OAUTH_SECRET_KEY_FILE_NAME = "auth-profile-secret-key";


export type LegacyOAuthRef = {
  source: typeof LEGACY_OAUTH_REF_SOURCE;
  provider: typeof LEGACY_OAUTH_REF_PROVIDER;
  id: string;
};
export type LegacyOAuthSecretMaterial = {
  access?: string;
  refresh?: string;
  idToken?: string;
};
type LegacyOAuthEncryptedPayload = {
  algorithm: typeof LEGACY_OAUTH_SECRET_ALGORITHM;
  iv: string;
  tag: string;
  ciphertext: string;
};

export const isLegacyOAuthRef: any = undefined as any;
export const isLegacyOAuthSidecarPayload: any = undefined as any;
export const legacyOAuthSidecarTestUtils: any = undefined as any;
export const loadLegacyOAuthSidecarMaterial: any = undefined as any;
export const resolveLegacyOAuthSidecarPath: any = undefined as any;
