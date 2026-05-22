// AUTH/MCP STUB - implementation removed

import { randomBytes } from "node:crypto";
import { createServer } from "node:http";
import type { OAuthCredentials } from "@earendil-works/pi-ai";
import type { ChutesOAuthAppConfig } from "../agents/chutes-oauth.js";
import {
  CHUTES_AUTHORIZE_ENDPOINT,
  exchangeChutesCodeForTokens,
  generateChutesPkce,
  parseOAuthCallbackInput,
} from "../agents/chutes-oauth.js";
import { isLoopbackHost } from "../gateway/net.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";

type OAuthPrompt = {
  message: string;
  placeholder?: string;
};

export const loginChutes: any = undefined as any;
