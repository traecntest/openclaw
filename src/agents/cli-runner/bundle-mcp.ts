// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { applyMergePatch } from "../../config/merge-patch.js";
import type { CliBackendConfig } from "../../config/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { tryReadJson } from "../../infra/json-files.js";
import { extractMcpServerMap, type BundleMcpConfig } from "../../plugins/bundle-mcp.js";
import type { CliBundleMcpMode } from "../../plugins/types.js";
import { loadMergedBundleMcpConfig, toCliBundleMcpServerConfig } from "../bundle-mcp-config.js";
import { isRecord } from "./bundle-mcp-adapter-shared.js";
import { findClaudeMcpConfigPath, injectClaudeMcpConfigArgs } from "./bundle-mcp-claude.js";
import { injectCodexMcpConfigArgs } from "./bundle-mcp-codex.js";
import { writeGeminiSystemSettings } from "./bundle-mcp-gemini.js";

type PreparedCliBundleMcpConfig = {
  backend: CliBackendConfig;
  cleanup?: () => Promise<void>;
  mcpConfigHash?: string;
  mcpResumeHash?: string;
  env?: Record<string, string>;
};

export const prepareCliBundleMcpConfig: any = undefined as any;
