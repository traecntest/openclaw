// AUTH/MCP STUB - implementation removed

import { formatCliCommand } from "../../cli/command-format.js";
import { normalizeProviderId } from "../provider-id.js";
import { sanitizeForLog } from "../../terminal/ansi.js";

export type OAuthRefreshFailureReason =
  | "refresh_token_reused"
  | "invalid_grant"
  | "sign_in_again"
  | "invalid_refresh_token"
  | "revoked";

export const buildOAuthRefreshFailureLoginCommand: any = undefined as any;
export const classifyOAuthRefreshFailure: any = undefined as any;
export const classifyOAuthRefreshFailureReason: any = undefined as any;
