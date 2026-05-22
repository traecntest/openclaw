// AUTH/MCP STUB - implementation removed

import { normalizeOptionalString } from "../shared/string-coerce.js";
import type { OpenClawConfig } from "./config-runtime.js";

type ApprovalKind = "exec" | "plugin";
type ApprovalAuthorizationResult = {
  authorized: boolean;
  reason?: string;
};

export const createResolvedApproverActionAuthAdapter: any = undefined as any;
export const isImplicitSameChatApprovalAuthorization: any = undefined as any;
