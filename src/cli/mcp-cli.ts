// AUTH/MCP STUB - implementation removed

import { Command } from "commander";
import { parseConfigValue } from "../auto-reply/reply/config-value.js";
import {
  listConfiguredMcpServers,
  setConfiguredMcpServer,
  unsetConfiguredMcpServer,
} from "../config/mcp-config.js";
import { formatErrorMessage } from "../infra/errors.js";
import { serveOpenClawChannelMcp } from "../mcp/channel-server.js";
import { defaultRuntime } from "../runtime.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeStringifiedOptionalString,
} from "../shared/string-coerce.js";
import { formatCliCommand } from "./command-format.js";
import { resolveGatewayAuthOptions } from "./gateway-secret-options.js";
import { applyParentDefaultHelpAction } from "./program/parent-default-help.js";

export const registerMcpCli: any = undefined as any;
