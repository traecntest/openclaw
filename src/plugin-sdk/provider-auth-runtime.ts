// AUTH/MCP STUB - implementation removed

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createServer } from "node:http";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolveApiKeyForProvider as resolveModelApiKeyForProvider } from "../agents/model-auth.js";

export type OAuthCallbackResult = { code: string; state: string };

// IdP-host allowlist for CORS echo on the loopback OAuth callback. Plugins
// pass the hosts that may legitimately issue preflights against the redirect
// URI; everything else gets a 204 with no `Access-Control-Allow-*` headers,
// which is safe for normal browser navigation but blocks cross-origin script
// reads. The empty allowlist (default) leaves the legacy permissive SDK
// behavior in place for existing callers.
export function buildOAuthCallbackOriginResolver(
  allowedHosts: readonly string[] | undefined,
): (originHeader: string | string[] | undefined) => string | undefined {
  if (!allowedHosts || allowedHosts.length === 0) {
    return () => undefined;
  }
  const normalized = new Set(
    allowedHosts.map((host) => host.trim().toLowerCase()).filter((host) => host.length > 0),
  );
  if (normalized.size === 0) {
    return () => undefined;
  }
  return (originHeader) => {
    const value = Array.isArray(originHeader) ? originHeader[0] : originHeader;
    if (!value) {
      return undefined;
    }
    try {
      const parsed = new URL(value);
      if (parsed.protocol !== "https:") {
        return undefined;
      }
      return normalized.has(parsed.host.toLowerCase()) ? parsed.origin : undefined;
    } catch {
      return undefined;
    }
  };
}
type GetRuntimeAuthForModel =
  typeof import("../plugins/runtime/runtime-model-auth.runtime.js").getRuntimeAuthForModel;
type ResolveApiKeyForProvider = typeof import("../agents/model-auth.js").resolveApiKeyForProvider;
type RuntimeModelAuthModule = typeof import("../plugins/runtime/runtime-model-auth.runtime.js");

export type { ProviderPreparedRuntimeAuth } from "../plugins/types.js";
export type { ResolvedProviderRuntimeAuth } from "../plugins/runtime/model-auth-types.js";
export {
  collectProviderApiKeysForExecution,
  executeWithApiKeyRotation,
} from "../agents/api-key-rotation.js";
export {
  requireApiKey,
  resolveAwsSdkEnvVarName,
  type ResolvedProviderAuth,
} from "../agents/model-auth-runtime-shared.js";
export { NON_ENV_SECRETREF_MARKER } from "../agents/model-auth-markers.js";
export { resolveEnvApiKey } from "../agents/model-auth-env.js";

export const buildOAuthCallbackOriginResolver: any = undefined as any;
export const generateOAuthState: any = undefined as any;
export const getRuntimeAuthForModel: any = undefined as any;
export const parseOAuthCallbackInput: any = undefined as any;
export const resolveApiKeyForProvider: any = undefined as any;
export const waitForLocalOAuthCallback: any = undefined as any;
