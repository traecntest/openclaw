// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { PiCredentialMap } from "./pi-auth-credentials.js";
import {
  listProviderEnvAuthLookupKeys,
  resolveProviderEnvApiKeyCandidates,
  resolveProviderEnvAuthEvidence,
} from "./model-auth-env-vars.js";
import { isRecord } from "../utils.js";
import { replaceFileAtomicSync } from "../infra/replace-file.js";
import { resolveEnvApiKey } from "./model-auth-env.js";
import { tryReadJsonSync } from "../infra/json-files.js";

export type PiDiscoveryAuthLookupOptions = {
  config?: OpenClawConfig;
  workspaceDir?: string;
  env?: NodeJS.ProcessEnv;
};

export const addEnvBackedPiCredentials: any = undefined as any;
export const scrubLegacyStaticAuthJsonEntriesForDiscovery: any = undefined as any;
