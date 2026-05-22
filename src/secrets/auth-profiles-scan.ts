// AUTH/MCP STUB - implementation removed

import { isNonEmptyString, isRecord } from "./shared.js";
import { listAuthProfileSecretTargetEntries } from "./target-registry.js";

export type AuthProfileCredentialType = "api_key" | "token";
type AuthProfileFieldSpec = {
  valueField: string;
  refField: string;
};
type ApiKeyCredentialVisit = {
  kind: "api_key";
  profileId: string;
  provider: string;
  profile: Record<string, unknown>;
  valueField: string;
  refField: string;
  value: unknown;
  refValue: unknown;
};
type TokenCredentialVisit = {
  kind: "token";
  profileId: string;
  provider: string;
  profile: Record<string, unknown>;
  valueField: string;
  refField: string;
  value: unknown;
  refValue: unknown;
};
type OauthCredentialVisit = {
  kind: "oauth";
  profileId: string;
  provider: string;
  profile: Record<string, unknown>;
  hasAccess: boolean;
  hasRefresh: boolean;
};
export type AuthProfileCredentialVisit =
  | ApiKeyCredentialVisit
  | TokenCredentialVisit
  | OauthCredentialVisit;

export const getAuthProfileFieldSpec: any = undefined as any;
export const iterateAuthProfileCredentials: any = undefined as any;
