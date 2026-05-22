// AUTH/MCP STUB - implementation removed

import fs from "node:fs/promises";
import path from "node:path";
import type { AuthProfileStore, OAuthCredential } from "../../../agents/auth-profiles/types.js";
import type { OpenClawConfig } from "../../../config/types.openclaw.js";
import {
  areOAuthCredentialsEquivalent,
  hasUsableOAuthCredential,
  isSafeToAdoptMainStoreOAuthIdentity,
} from "../../../agents/auth-profiles/oauth-shared.js";
import {
  resolveAgentDir,
  resolveDefaultAgentDir,
  listAgentEntries,
} from "../../../agents/agent-scope.js";
import { AUTH_STORE_LOCK_OPTIONS } from "../../../agents/auth-profiles/constants.js";
import { loadPersistedAuthProfileStore } from "../../../agents/auth-profiles/persisted.js";
import { resolveAuthStorePath } from "../../../agents/auth-profiles/paths.js";
import { resolveStateDir } from "../../../config/paths.js";
import { saveAuthProfileStore } from "../../../agents/auth-profiles/store.js";
import { shortenHomePath } from "../../../utils.js";
import { withFileLock } from "../../../infra/file-lock.js";

type StaleOAuthProfileShadow = {
  agentDir: string;
  authPath: string;
  profileId: string;
};

export { testing as __testing };


export const collectStaleOAuthProfileShadowWarnings: any = undefined as any;
export const repairStaleOAuthProfileShadows: any = undefined as any;
export const scanStaleOAuthProfileShadows: any = undefined as any;
export const testing: any = undefined as any;
