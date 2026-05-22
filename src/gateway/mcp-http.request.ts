// AUTH/MCP STUB - implementation removed

import type { InboundEventKind } from "../channels/inbound-event/kind.js";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { checkBrowserOrigin } from "./origin-check.js";
import { getHeader } from "./http-utils.js";
import { isLoopbackAddress } from "./net.js";
import { isTruthyEnvValue } from "../infra/env.js";
import { normalizeMessageChannel } from "../utils/message-channel.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { resolveMainSessionKey } from "../config/sessions.js";
import { safeEqualSecret } from "../security/secret-equal.js";

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
