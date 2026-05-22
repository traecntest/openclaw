// AUTH/MCP STUB - implementation removed

import type { AuthRateLimiter } from "./auth-rate-limit.js";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  authorizeHttpGatewayConnect,
  type GatewayAuthResult,
  type ResolvedGatewayAuth,
} from "./auth.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { ADMIN_SCOPE, CLI_DEFAULT_OPERATOR_SCOPES } from "./method-scopes.js";
import { authorizeOperatorScopesForMethod } from "./method-scopes.js";
import { getRuntimeConfig } from "../config/io.js";
import { sendGatewayAuthFailure, sendMissingScopeForbidden } from "./http-common.js";

export type AuthorizedGatewayHttpRequest = {
  authMethod?: GatewayAuthResult["method"];
  trustDeclaredOperatorScopes: boolean;
};
export type GatewayHttpRequestAuthCheckResult =
  | {
      ok: true;
      requestAuth: AuthorizedGatewayHttpRequest;
    }
type SharedSecretGatewayAuth = Pick<ResolvedGatewayAuth, "mode">;

export const authorizeGatewayHttpRequestOrReply: any = undefined as any;
export const authorizeScopedGatewayHttpRequestOrReply: any = undefined as any;
export const checkGatewayHttpRequestAuth: any = undefined as any;
export const getBearerToken: any = undefined as any;
export const getHeader: any = undefined as any;
export const isGatewayBearerHttpRequest: any = undefined as any;
export const resolveHttpBrowserOriginPolicy: any = undefined as any;
export const resolveHttpSenderIsOwner: any = undefined as any;
export const resolveOpenAiCompatibleHttpOperatorScopes: any = undefined as any;
export const resolveOpenAiCompatibleHttpSenderIsOwner: any = undefined as any;
export const resolveSharedSecretHttpOperatorScopes: any = undefined as any;
export const resolveTrustedHttpOperatorScopes: any = undefined as any;
