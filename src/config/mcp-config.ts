// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "./types.openclaw.js";
import {
  canonicalizeConfiguredMcpServer,
  normalizeConfiguredMcpServers,
} from "./mcp-config-normalize.js";
import { isRecord } from "../utils.js";
import { readSourceConfigSnapshot } from "./io.js";
import { replaceConfigFile } from "./mutate.js";
import { validateConfigObjectWithPlugins } from "./validation.js";

type ConfigMcpReadResult =
  | {
      ok: true;
      path: string;
      config: OpenClawConfig;
      mcpServers: ConfigMcpServers;
      baseHash?: string;
    }
type ConfigMcpServers = ReturnType<typeof normalizeConfiguredMcpServers>;
type ConfigMcpWriteResult =
  | {
      ok: true;
      path: string;
      config: OpenClawConfig;
      mcpServers: ConfigMcpServers;
      removed?: boolean;
    }

export const listConfiguredMcpServers: any = undefined as any;
export const setConfiguredMcpServer: any = undefined as any;
export const unsetConfiguredMcpServer: any = undefined as any;
