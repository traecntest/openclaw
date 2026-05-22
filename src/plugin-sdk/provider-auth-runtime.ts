// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import fs from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolveApiKeyForProvider as resolveModelApiKeyForProvider } from "../agents/model-auth.js";

export { resolveEnvApiKey } from "../agents/model-auth-env.js";
export {
  collectProviderApiKeysForExecution,
  executeWithApiKeyRotation,
} from "../agents/api-key-rotation.js";
export { NON_ENV_SECRETREF_MARKER } from "../agents/model-auth-markers.js";
export {
  requireApiKey,
  resolveAwsSdkEnvVarName,
  type ResolvedProviderAuth,
} from "../agents/model-auth-runtime-shared.js";
export type { ProviderPreparedRuntimeAuth } from "../plugins/types.js";
export type { ResolvedProviderRuntimeAuth } from "../plugins/runtime/model-auth-types.js";

export type OAuthCallbackResult = { code: string; state: string };

export const buildOAuthCallbackOriginResolver: any = undefined as any;
export const generateOAuthState: any = undefined as any;
export const parseOAuthCallbackInput: any = undefined as any;
export const waitForLocalOAuthCallback: any = undefined as any;
export const resolveApiKeyForProvider: any = undefined as any;
export const getRuntimeAuthForModel: any = undefined as any;

