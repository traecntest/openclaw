// AUTH/MCP STUB - implementation removed

import { spawn, type ChildProcess } from "node:child_process";
import process from "node:process";
import { PassThrough } from "node:stream";
import { getDefaultEnvironment } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ReadBuffer, serializeMessage } from "@modelcontextprotocol/sdk/shared/stdio.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { JSONRPCMessage } from "@modelcontextprotocol/sdk/types.js";
import { killProcessTree } from "../process/kill-tree.js";
import { prepareOomScoreAdjustedSpawn } from "../process/linux-oom-score.js";

export type OpenClawStdioServerParameters = {
  command: string;
  args?: string[];
  env?: Record<string, string>;
  cwd?: string;
  stderr?: "pipe" | "overlapped" | "inherit" | "ignore";
};

export const OpenClawStdioClientTransport: any = undefined as any;
