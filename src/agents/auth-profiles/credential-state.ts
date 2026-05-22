// AUTH STUB - implementation removed

import { coerceSecretRef, normalizeSecretInputString } from "../../config/types.secrets.js";
import type { AuthProfileCredential, OAuthCredential } from "./types.js";

export type AuthCredentialReasonCode =
  | "ok"
  | "missing_credential"
  | "invalid_expires"
  | "expired"
  | "unresolved_ref";

export type TokenExpiryState = "missing" | "valid" | "expiring" | "expired" | "invalid_expires";

export const DEFAULT_OAUTH_REFRESH_MARGIN_MS: any = undefined as any;
export const evaluateStoredCredentialEligibility: any = undefined as any;
export const hasUsableOAuthCredential: any = undefined as any;
export const resolveTokenExpiryState: any = undefined as any;
