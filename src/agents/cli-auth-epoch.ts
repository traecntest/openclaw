// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { loadAuthProfileStoreForRuntime } from "./auth-profiles/store.js";
import type { AuthProfileCredential, AuthProfileStore } from "./auth-profiles/types.js";
import {
  readClaudeCliCredentialsCached,
  readCodexCliCredentialsCached,
  readGeminiCliCredentialsCached,
  type ClaudeCliCredential,
  type CodexCliCredential,
  type GeminiCliCredential,
} from "./cli-credentials.js";

type CliAuthEpochDeps = {
  readClaudeCliCredentialsCached: typeof readClaudeCliCredentialsCached;
  readCodexCliCredentialsCached: typeof readCodexCliCredentialsCached;
  readGeminiCliCredentialsCached: typeof readGeminiCliCredentialsCached;
  loadAuthProfileStoreForRuntime: typeof loadAuthProfileStoreForRuntime;
};

export const CLI_AUTH_EPOCH_VERSION: any = undefined as any;
export const resetCliAuthEpochTestDeps: any = undefined as any;
export const resolveCliAuthEpoch: any = undefined as any;
export const setCliAuthEpochTestDeps: any = undefined as any;
