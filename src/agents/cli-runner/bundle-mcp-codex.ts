// AUTH/MCP STUB - implementation removed

import type { BundleMcpConfig, BundleMcpServerConfig } from "../../plugins/bundle-mcp.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { buildCodexMcpServersConfig, normalizeCodexMcpServerConfig } from "../codex-mcp-config.js";
import { isRecord } from "./bundle-mcp-adapter-shared.js";
import { isValidAgentId, normalizeAgentId } from "../../routing/session-key.js";
import { normalizeConfiguredMcpServers } from "../../config/mcp-config-normalize.js";
import { serializeTomlInlineValue } from "./toml-inline.js";

type CodexThreadConfigObject = { [key: string]: CodexThreadConfigValue };

type CodexUserMcpServersProjectionOptions = {
  agentId?: string;
};
type CodexThreadConfigValue =
  | string
  | number
  | boolean
  | null
  | CodexThreadConfigValue[]
  | { [key: string]: CodexThreadConfigValue };

export const buildCodexUserMcpServersThreadConfigPatch: any = undefined as any;
export const injectCodexMcpConfigArgs: any = undefined as any;
