// AUTH/MCP STUB - implementation removed

import type { AnyAgentTool } from "../agents/tools/common.js";
import {
  isToolWrappedWithBeforeToolCallHook,
  wrapToolWithBeforeToolCallHook,
} from "../agents/pi-tools.before-tool-call.js";
import { coerceChatContentText } from "../shared/chat-content.js";
import { formatErrorMessage } from "../infra/errors.js";

type CallPluginToolParams = {
  name: string;
  arguments?: unknown;
};

export const createPluginToolsMcpHandlers: any = undefined as any;
