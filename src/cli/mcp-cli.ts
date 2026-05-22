// AUTH/MCP STUB - implementation removed

import {
  listConfiguredMcpServers,
  setConfiguredMcpServer,
  unsetConfiguredMcpServer,
} from "../config/mcp-config.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeStringifiedOptionalString,
} from "../shared/string-coerce.js";
import { Command } from "commander";
import { applyParentDefaultHelpAction } from "./program/parent-default-help.js";
import { defaultRuntime } from "../runtime.js";
import { formatCliCommand } from "./command-format.js";
import { formatErrorMessage } from "../infra/errors.js";
import { parseConfigValue } from "../auto-reply/reply/config-value.js";
import { resolveGatewayAuthOptions } from "./gateway-secret-options.js";
import { serveOpenClawChannelMcp } from "../mcp/channel-server.js";

export const registerMcpCli: any = undefined as any;
