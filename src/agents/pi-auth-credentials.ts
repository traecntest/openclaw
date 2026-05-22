// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, AuthProfileStore } from "./auth-profiles.js";
import { coerceSecretRef } from "../config/types.secrets.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { normalizeProviderId } from "./provider-id.js";

export type PiCredential = PiApiKeyCredential | PiOAuthCredential;
export type PiCredentialMap = Record<string, PiCredential>;
export type ResolvePiCredentialMapOptions = {
  includeSecretRefPlaceholders?: boolean;
};
type PiApiKeyCredential = { type: "api_key"; key: string };
type PiOAuthCredential = {
  type: "oauth";
  access: string;
  refresh: string;
  expires: number;
};

export const piCredentialsEqual: any = undefined as any;
export const resolvePiCredentialMapFromStore: any = undefined as any;
