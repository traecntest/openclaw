// AUTH/MCP STUB - implementation removed

import entry from "./index.js";
import fs from "node:fs";
import path from "node:path";
import {
  createPluginModuleLoaderCache,
  getCachedPluginModuleLoader,
} from "../plugins/plugin-module-loader-cache.js";
import {
  loadPluginManifest,
  PLUGIN_MANIFEST_FILENAME,
  resolvePackageExtensionEntries,
} from "../plugins/manifest.js";
import { buildPluginLoaderAliasMap } from "../plugins/sdk-alias.js";
import { defaultRuntime } from "../runtime.js";
import { defineToolPlugin } from "openclaw/plugin-sdk/tool-plugin";
import { getToolPluginMetadata } from "openclaw/plugin-sdk/tool-plugin";
import { getToolPluginMetadata, type ToolPluginMetadata } from "../plugin-sdk/tool-plugin.js";
import { isRecord } from "../utils.js";
import { toSafeImportPath } from "../shared/import-specifier.js";
import { unwrapDefaultModuleExport } from "../plugins/module-export.js";

export type PluginsBuildOptions = {
  root?: string;
  entry?: string;
  check?: boolean;
};
export type PluginsInitOptions = {
  directory?: string;
  force?: boolean;
  name?: string;
};
export type PluginsValidateOptions = {
  root?: string;
  entry?: string;
};
type JsonObject = Record<string, unknown>;
type LoadedToolPlugin = {
  entry: unknown;
  metadata: ToolPluginMetadata;
};

export const buildToolPluginManifest: any = undefined as any;
export const buildToolPluginPackageManifest: any = undefined as any;
export default undefined as any;
export const loadToolPlugin: any = undefined as any;
export const runPluginsBuildCommand: any = undefined as any;
export const runPluginsInitCommand: any = undefined as any;
export const runPluginsValidateCommand: any = undefined as any;
export const validateToolPluginProject: any = undefined as any;
