// AUTH STUB - implementation removed

import { isNonEmptyString, isRecord } from "./shared.js";
import { listAuthProfileSecretTargetEntries } from "./target-registry.js";

export type AuthProfileCredentialType = "api_key" | "token";

export type AuthProfileCredentialVisit =
  | ApiKeyCredentialVisit
  | TokenCredentialVisit
  | OauthCredentialVisit;

export const getAuthProfileFieldSpec: any = undefined as any;
