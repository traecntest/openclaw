// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "./config-runtime.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";

type ApprovalAuthorizationResult = {
  authorized: boolean;
  reason?: string;
};
type ApprovalKind = "exec" | "plugin";

export const createResolvedApproverActionAuthAdapter: any = undefined as any;
export const isImplicitSameChatApprovalAuthorization: any = undefined as any;
