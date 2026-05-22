// AUTH/MCP STUB - implementation removed

import type { BundleMcpDiagnostic, BundleMcpServerConfig } from "../plugins/bundle-mcp.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { loadMergedBundleMcpConfig } from "./bundle-mcp-config.js";

type EmbeddedPiMcpConfig = {
  mcpServers: Record<string, BundleMcpServerConfig>;
  diagnostics: BundleMcpDiagnostic[];
};

export const loadEmbeddedPiMcpConfig: any = undefined as any;
