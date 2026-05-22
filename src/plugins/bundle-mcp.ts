// AUTH/MCP STUB - implementation removed

import fs from "node:fs";
import path from "node:path";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { PluginBundleFormat } from "./manifest-types.js";
import {
  CLAUDE_BUNDLE_MANIFEST_RELATIVE_PATH,
  CODEX_BUNDLE_MANIFEST_RELATIVE_PATH,
  CURSOR_BUNDLE_MANIFEST_RELATIVE_PATH,
  mergeBundlePathLists,
  normalizeBundlePathList,
} from "./bundle-manifest.js";
import {
  inspectBundleServerRuntimeSupport,
  loadEnabledBundleConfig,
  readBundleJsonObject,
  resolveBundleJsonOpenFailure,
} from "./bundle-config-shared.js";
import { applyMergePatch } from "../config/merge-patch.js";
import { isRecord } from "../utils.js";
import { readRootJsonObjectSync } from "../infra/json-files.js";

export type BundleMcpConfig = {
  mcpServers: Record<string, BundleMcpServerConfig>;
};
export type BundleMcpDiagnostic = {
  pluginId: string;
  message: string;
};
export type BundleMcpRuntimeSupport = {
  hasSupportedStdioServer: boolean;
  supportedServerNames: string[];
  unsupportedServerNames: string[];
  diagnostics: string[];
};
export type BundleMcpServerConfig = Record<string, unknown>;
export type EnabledBundleMcpConfigResult = {
  config: BundleMcpConfig;
  diagnostics: BundleMcpDiagnostic[];
};

export const extractMcpServerMap: any = undefined as any;
export const inspectBundleMcpRuntimeSupport: any = undefined as any;
export const loadEnabledBundleMcpConfig: any = undefined as any;
