// AUTH/MCP STUB - implementation removed

import { execFileSync, execSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { formatErrorMessage } from "../infra/errors.js";
import { loadJsonFile, saveJsonFile } from "../infra/json-file.js";
import { createSubsystemLogger } from "../logging/subsystem.js";
import { resolveUserPath } from "../utils.js";
import type { OAuthCredentials, OAuthProvider } from "./auth-profiles/types.js";

type CachedValue<T> = {
  value: T | null;
  readAt: number;
  cacheKey: string;
  sourceFingerprint?: number | string | null;
};
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
export type MiniMaxCliCredential = {
  type: "oauth";
  provider: "minimax-portal";
  access: string;
  refresh: string;
  expires: number;
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
type ClaudeCliFileOptions = {
  homeDir?: string;
};
type ClaudeCliWriteOptions = ClaudeCliFileOptions & {
  platform?: NodeJS.Platform;
  writeKeychain?: (credentials: OAuthCredentials) => boolean;
  writeFile?: (credentials: OAuthCredentials, options?: ClaudeCliFileOptions) => boolean;
};
type ExecSyncFn = typeof execSync;
type ExecFileSyncFn = typeof execFileSync;

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
