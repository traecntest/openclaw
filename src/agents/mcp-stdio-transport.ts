// AUTH/MCP STUB - implementation removed

import process from "node:process";
import type { JSONRPCMessage } from "@modelcontextprotocol/sdk/types.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { PassThrough } from "node:stream";
import { ReadBuffer, serializeMessage } from "@modelcontextprotocol/sdk/shared/stdio.js";
import { getDefaultEnvironment } from "@modelcontextprotocol/sdk/client/stdio.js";
import { killProcessTree } from "../process/kill-tree.js";
import { prepareOomScoreAdjustedSpawn } from "../process/linux-oom-score.js";
import { spawn, type ChildProcess } from "node:child_process";

export type OpenClawStdioServerParameters = {
  command: string;
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
  stderr?: "pipe" | "overlapped" | "inherit" | "ignore";
};

export const OpenClawStdioClientTransport: any = undefined as any;
