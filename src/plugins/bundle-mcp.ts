// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import { applyMergePatch } from "../config/merge-patch.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { readRootJsonObjectSync } from "../infra/json-files.js";
import { isRecord } from "../utils.js";
import {
  inspectBundleServerRuntimeSupport,
  loadEnabledBundleConfig,
  readBundleJsonObject,
  resolveBundleJsonOpenFailure,
} from "./bundle-config-shared.js";
import {
  CLAUDE_BUNDLE_MANIFEST_RELATIVE_PATH,
  CODEX_BUNDLE_MANIFEST_RELATIVE_PATH,
  CURSOR_BUNDLE_MANIFEST_RELATIVE_PATH,
  mergeBundlePathLists,
  normalizeBundlePathList,
} from "./bundle-manifest.js";
import type { PluginBundleFormat } from "./manifest-types.js";

export type BundleMcpServerConfig = Record<string, unknown>;
export type BundleMcpConfig = {
  mcpServers: Record<string, BundleMcpServerConfig>;
};
export type BundleMcpDiagnostic = {
  pluginId: string;
  message: string;
};
export type EnabledBundleMcpConfigResult = {
  config: BundleMcpConfig;
  diagnostics: BundleMcpDiagnostic[];
};
export type BundleMcpRuntimeSupport = {
  hasSupportedStdioServer: boolean;
  supportedServerNames: string[];
  unsupportedServerNames: string[];
  diagnostics: string[];
};

export const extractMcpServerMap: any = undefined as any;
export const inspectBundleMcpRuntimeSupport: any = undefined as any;
export const loadEnabledBundleMcpConfig: any = undefined as any;
