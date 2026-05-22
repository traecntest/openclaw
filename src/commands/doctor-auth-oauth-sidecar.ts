// AUTH STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import { listAgentIds, resolveAgentDir, resolveDefaultAgentDir } from "../agents/agent-scope.js";
import { AUTH_STORE_VERSION } from "../agents/auth-profiles/constants.js";
import {
  isLegacyOAuthRef,
  isLegacyOAuthSidecarPayload,
  legacyOAuthSidecarTestUtils,
  loadLegacyOAuthSidecarMaterial,
  resolveLegacyOAuthSidecarPath,
  type LegacyOAuthRef,
  type LegacyOAuthSecretMaterial,
} from "../agents/auth-profiles/legacy-oauth-sidecar.js";
import { resolveAuthStorePath } from "../agents/auth-profiles/paths.js";
import { clearRuntimeAuthProfileStoreSnapshots } from "../agents/auth-profiles/store.js";
import { formatCliCommand } from "../cli/command-format.js";
import { resolveOAuthDir, resolveStateDir } from "../config/paths.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { loadJsonFile, saveJsonFile } from "../infra/json-file.js";
import { note } from "../terminal/note.js";
import { shortenHomePath } from "../utils.js";
import type { DoctorPrompter } from "./doctor-prompter.js";

export type LegacyOAuthSidecarRepairResult = {
  detected: string[];
  changes: string[];
  warnings: string[];
};

export { testing as __testing };

export const __testing: any = undefined as any;
export const maybeRepairLegacyOAuthSidecarProfiles: any = undefined as any;
export const testing: any = undefined as any;
