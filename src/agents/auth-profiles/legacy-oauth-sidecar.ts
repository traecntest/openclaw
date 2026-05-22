// AUTH/MCP STUB - implementation removed

import * as childProcess from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createCipheriv, createDecipheriv, createHash } from "node:crypto";
import { loadJsonFile } from "../../infra/json-file.js";
import { resolveOAuthDir, resolveStateDir } from "../../config/paths.js";

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
