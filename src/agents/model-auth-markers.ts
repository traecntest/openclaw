// AUTH/MCP STUB - implementation removed

import type { SecretRefSource } from "../config/types.secrets.js";
import { listOpenClawPluginManifestMetadata } from "../plugins/manifest-metadata-scan.js";
import { listKnownProviderEnvApiKeyNames } from "./model-auth-env-vars.js";

export const CUSTOM_LOCAL_AUTH_MARKER: any = undefined as any;
export const GCP_VERTEX_CREDENTIALS_MARKER: any = undefined as any;
export const MINIMAX_OAUTH_MARKER: any = undefined as any;
export const NON_ENV_SECRETREF_MARKER: any = undefined as any;
export const OAUTH_API_KEY_MARKER_PREFIX: any = undefined as any;
export const OLLAMA_LOCAL_AUTH_MARKER: any = undefined as any;
export const SECRETREF_ENV_HEADER_MARKER_PREFIX: any = undefined as any;
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
