// AUTH/MCP STUB - implementation removed

import type { BundleMcpDiagnostic } from "../plugins/bundle-mcp.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";

export type CodexBundleMcpThreadConfig = {
  configPatch?: {
    mcp_servers: CodexMcpServersConfig;
  };
  diagnostics: BundleMcpDiagnostic[];
  evaluated: boolean;
  fingerprint?: string;
};
export type CodexMcpServersConfig = Record<string, Record<string, unknown>>;
export type LoadCodexBundleMcpThreadConfigParams = {
  workspaceDir: string;
  cfg?: OpenClawConfig;
  toolsEnabled?: boolean;
  disableTools?: boolean;
  toolsAllow?: string[];
};

