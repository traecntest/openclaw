// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import {
  loadEnabledBundleMcpConfig,
  type BundleMcpConfig,
  type BundleMcpServerConfig,
} from "../plugins/bundle-mcp.js";
import { normalizeOptionalLowercaseString } from "../shared/string-coerce.js";
import { isRecord } from "../utils.js";
import {
  applyCommonServerConfig,
  decodeHeaderEnvPlaceholder,
  normalizeStringRecord,
} from "./cli-runner/bundle-mcp-adapter-shared.js";
import type {
  CodexBundleMcpThreadConfig,
  CodexMcpServersConfig,
  LoadCodexBundleMcpThreadConfigParams,
} from "./codex-mcp-config.types.js";
import { shouldCreateBundleMcpRuntimeForAttempt } from "./pi-embedded-runner/run/attempt-tool-construction-plan.js";

type CodexMcpToolApprovalMode = "auto" | "prompt" | "approve";

export type {
  CodexBundleMcpThreadConfig,
  CodexMcpServersConfig,
  LoadCodexBundleMcpThreadConfigParams,
} from "./codex-mcp-config.types.js";

export const buildCodexMcpServersConfig: any = undefined as any;
export const loadCodexBundleMcpThreadConfig: any = undefined as any;
export const normalizeCodexMcpServerConfig: any = undefined as any;
