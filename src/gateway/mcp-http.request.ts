// AUTH/MCP STUB - implementation removed

import type { IncomingMessage, ServerResponse } from "node:http";
import type { InboundEventKind } from "../channels/inbound-event/kind.js";
import { resolveMainSessionKey } from "../config/sessions.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { isTruthyEnvValue } from "../infra/env.js";
import { safeEqualSecret } from "../security/secret-equal.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { normalizeMessageChannel } from "../utils/message-channel.js";
import { getHeader } from "./http-utils.js";
import { isLoopbackAddress } from "./net.js";
import { checkBrowserOrigin } from "./origin-check.js";

type McpRequestContext = {
  sessionKey: string;
  messageProvider: string | undefined;
  accountId: string | undefined;
  inboundEventKind: InboundEventKind | undefined;
  senderIsOwner: boolean;
};

export const readMcpHttpBody: any = undefined as any;
export const resolveMcpRequestContext: any = undefined as any;
export const validateMcpLoopbackRequest: any = undefined as any;
