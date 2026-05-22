// AUTH/MCP STUB - implementation removed

import type { CommandHandler } from "./commands-types.js";
import {
  listConfiguredMcpServers,
  setConfiguredMcpServer,
  unsetConfiguredMcpServer,
} from "../../config/mcp-config.js";
import {
  rejectNonOwnerCommand,
  rejectUnauthorizedCommand,
  requireCommandFlagEnabled,
  requireGatewayClientScope,
} from "./command-gates.js";
import { isInternalMessageChannel } from "../../utils/message-channel.js";
import { parseMcpCommand } from "./mcp-commands.js";

export const handleMcpCommand: any = undefined as any;
