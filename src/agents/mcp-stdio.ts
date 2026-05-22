// AUTH/MCP STUB - implementation removed

import { isMcpConfigRecord, toMcpEnvRecord, toMcpStringArray } from "./mcp-config-shared.js";

export type StdioMcpServerLaunchConfig = {
  command: string;
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
};
type StdioMcpServerLaunchResult =
  | { ok: true; config: StdioMcpServerLaunchConfig }

export const describeStdioMcpServerLaunchConfig: any = undefined as any;
export const resolveStdioMcpServerLaunchConfig: any = undefined as any;
