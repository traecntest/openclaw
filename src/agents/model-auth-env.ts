// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import os from "node:os";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ProviderAuthEvidence } from "../secrets/provider-env-vars.js";
import {
  resolveProviderEnvApiKeyCandidates,
  resolveProviderEnvAuthEvidence,
} from "./model-auth-env-vars.js";
import { GCP_VERTEX_CREDENTIALS_MARKER } from "./model-auth-markers.js";
import { getShellEnvAppliedKeys } from "../infra/shell-env.js";
import { normalizeOptionalSecretInput } from "../utils/normalize-secret-input.js";
import { normalizeProviderIdForAuth } from "./provider-id.js";
import { resolvePluginSetupProvider } from "../plugins/setup-registry.js";
import { resolveProviderIdForAuth } from "./provider-auth-aliases.js";

export type EnvApiKeyResult = {
  apiKey: string;
  source: string;
};
type EnvApiKeyLookupOptions = {
  config?: OpenClawConfig;
  workspaceDir?: string;
  aliasMap?: Readonly<Record<string, string>>;
  candidateMap?: Readonly<Record<string, readonly string[]>>;
  authEvidenceMap?: Readonly<Record<string, readonly ProviderAuthEvidence[]>>;
  skipSetupProviderFallback?: boolean;
};

export const resolveEnvApiKey: any = undefined as any;
