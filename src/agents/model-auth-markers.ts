// AUTH/MCP STUB - implementation removed

import type { SecretRefSource } from "../config/types.secrets.js";
import { listKnownProviderEnvApiKeyNames } from "./model-auth-env-vars.js";
import { listOpenClawPluginManifestMetadata } from "../plugins/manifest-metadata-scan.js";

export const CUSTOM_LOCAL_AUTH_MARKER = "custom-local";
export const GCP_VERTEX_CREDENTIALS_MARKER = "gcp-vertex-credentials";
export const MINIMAX_OAUTH_MARKER = "minimax-oauth";
export const NON_ENV_SECRETREF_MARKER = "secretref-managed";
export const OAUTH_API_KEY_MARKER_PREFIX = "oauth:";
export const OLLAMA_LOCAL_AUTH_MARKER = "ollama-local";
export const SECRETREF_ENV_HEADER_MARKER_PREFIX = "secretref-env:";

export const isAwsSdkAuthMarker: any = undefined as any;
export const isKnownEnvApiKeyMarker: any = undefined as any;
export const isNonSecretApiKeyMarker: any = undefined as any;
export const isOAuthApiKeyMarker: any = undefined as any;
export const isSecretRefHeaderValueMarker: any = undefined as any;
export const listKnownNonSecretApiKeyMarkers: any = undefined as any;
export const resolveEnvSecretRefHeaderValueMarker: any = undefined as any;
export const resolveNonEnvSecretRefApiKeyMarker: any = undefined as any;
export const resolveNonEnvSecretRefHeaderValueMarker: any = undefined as any;
export const resolveOAuthApiKeyMarker: any = undefined as any;
