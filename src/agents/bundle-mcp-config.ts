// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  loadEnabledBundleMcpConfig,
  type BundleMcpConfig,
  type BundleMcpDiagnostic,
  type BundleMcpServerConfig,
} from "../plugins/bundle-mcp.js";
import { normalizeConfiguredMcpServers } from "../config/mcp-config-normalize.js";

type BundleMcpServerMapper = (server: BundleMcpServerConfig, name: string) => BundleMcpServerConfig;
type MergedBundleMcpConfig = {
  config: BundleMcpConfig;
  diagnostics: BundleMcpDiagnostic[];
};

export const loadMergedBundleMcpConfig: any = undefined as any;
export const toCliBundleMcpServerConfig: any = undefined as any;
