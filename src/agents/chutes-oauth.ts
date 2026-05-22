// AUTH/MCP STUB - implementation removed

import type { OAuthCredentials } from "@earendil-works/pi-ai";
import { createHash, randomBytes } from "node:crypto";
import { normalizeOptionalString } from "../shared/string-coerce.js";

export type ChutesOAuthAppConfig = {
  clientId: string;
  clientSecret?: string;
  redirectUri: string;
  scopes: string[];
};
type ChutesPkce = { verifier: string; challenge: string };

type ChutesUserInfo = {
  sub?: string;
  username?: string;
  created_at?: string;
};
type ChutesStoredOAuth = OAuthCredentials & {
  clientId?: string;
};

export const CHUTES_AUTHORIZE_ENDPOINT: any = undefined as any;
export const CHUTES_TOKEN_ENDPOINT: any = undefined as any;
export const CHUTES_USERINFO_ENDPOINT: any = undefined as any;
export const exchangeChutesCodeForTokens: any = undefined as any;
export const generateChutesPkce: any = undefined as any;
export const parseOAuthCallbackInput: any = undefined as any;
export const refreshChutesTokens: any = undefined as any;
