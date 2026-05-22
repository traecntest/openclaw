// AUTH/MCP STUB - implementation removed

import type { ChutesOAuthAppConfig } from "../agents/chutes-oauth.js";
import type { OAuthCredentials } from "@earendil-works/pi-ai";
import {
  CHUTES_AUTHORIZE_ENDPOINT,
  exchangeChutesCodeForTokens,
  generateChutesPkce,
  parseOAuthCallbackInput,
} from "../agents/chutes-oauth.js";
import { createServer } from "node:http";
import { isLoopbackHost } from "../gateway/net.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { randomBytes } from "node:crypto";

type OAuthPrompt = {
  message: string;
  placeholder?: string;
};

export const loginChutes: any = undefined as any;
