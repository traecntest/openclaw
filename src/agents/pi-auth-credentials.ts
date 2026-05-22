// AUTH STUB - implementation removed

import { coerceSecretRef } from "../config/types.secrets.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import type { AuthProfileCredential, AuthProfileStore } from "./auth-profiles.js";
import { normalizeProviderId } from "./provider-id.js";

export type PiCredential = PiApiKeyCredential | PiOAuthCredential;

export type PiCredentialMap = Record<string, PiCredential>;

export type ResolvePiCredentialMapOptions = {
  includeSecretRefPlaceholders?: boolean;
};

export const piCredentialsEqual: any = undefined as any;
export const resolvePiCredentialMapFromStore: any = undefined as any;
