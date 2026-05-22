// AUTH STUB - implementation removed

import * as childProcess from "node:child_process";
import { createCipheriv, createDecipheriv, createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { resolveOAuthDir, resolveStateDir } from "../../config/paths.js";
import { loadJsonFile } from "../../infra/json-file.js";

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

export const isLegacyOAuthRef: any = undefined as any;
export const isLegacyOAuthSidecarPayload: any = undefined as any;
export const legacyOAuthSidecarTestUtils: any = undefined as any;
export const loadLegacyOAuthSidecarMaterial: any = undefined as any;
export const resolveLegacyOAuthSidecarPath: any = undefined as any;
