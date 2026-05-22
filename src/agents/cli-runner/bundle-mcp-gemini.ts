// AUTH/MCP STUB - implementation removed

import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { applyMergePatch } from "../../config/merge-patch.js";
import { tryReadJson, writeJson } from "../../infra/json-files.js";
import type { BundleMcpConfig, BundleMcpServerConfig } from "../../plugins/bundle-mcp.js";
import {
  applyCommonServerConfig,
  decodeHeaderEnvPlaceholder,
  isRecord,
  normalizeStringRecord,
} from "./bundle-mcp-adapter-shared.js";

export const writeGeminiSystemSettings: any = undefined as any;
