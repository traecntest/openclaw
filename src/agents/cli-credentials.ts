// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import type { OAuthCredentials, OAuthProvider } from "./auth-profiles/types.js";
import { createHash } from "node:crypto";
import { createSubsystemLogger } from "../logging/subsystem.js";
import { execFileSync, execSync } from "node:child_process";
import { formatErrorMessage } from "../infra/errors.js";
import { loadJsonFile, saveJsonFile } from "../infra/json-file.js";
import { resolveUserPath } from "../utils.js";

export type ClaudeCliCredential =
  | {
      type: "oauth";
      provider: "anthropic";
      access: string;
      refresh: string;
      expires: number;
    }
export type CodexCliCredential = {
  type: "oauth";
  provider: OAuthProvider;
  access: string;
  refresh: string;
  expires: number;
  accountId?: string;
  idToken?: string;
};
export type GeminiCliCredential = {
  type: "oauth";
  provider: "google-gemini-cli";
  access: string;
  refresh: string;
  expires: number;
  accountId?: string;
  email?: string;
};
export type MiniMaxCliCredential = {
  type: "oauth";
  provider: "minimax-portal";
  access: string;
  refresh: string;
  expires: number;
};
type CachedValue<T> = {
  value: T | null;
  readAt: number;
  cacheKey: string;
  sourceFingerprint?: number | string | null;
};
type ClaudeCliFileOptions = {
  homeDir?: string;
};
type ClaudeCliWriteOptions = ClaudeCliFileOptions & {
  platform?: NodeJS.Platform;
  writeKeychain?: (credentials: OAuthCredentials) => boolean;
  writeFile?: (credentials: OAuthCredentials, options?: ClaudeCliFileOptions) => boolean;
};
type ExecFileSyncFn = typeof execFileSync;
type ExecSyncFn = typeof execSync;

export const readClaudeCliCredentials: any = undefined as any;
export const readClaudeCliCredentialsCached: any = undefined as any;
export const readCodexCliCredentials: any = undefined as any;
export const readCodexCliCredentialsCached: any = undefined as any;
export const readGeminiCliCredentialsCached: any = undefined as any;
export const readMiniMaxCliCredentialsCached: any = undefined as any;
export const resetCliCredentialCachesForTest: any = undefined as any;
export const writeClaudeCliCredentials: any = undefined as any;
export const writeClaudeCliFileCredentials: any = undefined as any;
export const writeClaudeCliKeychainCredentials: any = undefined as any;
