// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, AuthProfileStore } from "../agents/auth-profiles/types.js";
import {
  pushAssignment,
  pushWarning,
  type ResolverContext,
  type SecretDefaults,
} from "./runtime-shared.js";
import { assertNoOAuthSecretRefPolicyViolations } from "../agents/auth-profiles/policy.js";
import { isNonEmptyString } from "./shared.js";
import { resolveSecretInputRef } from "../config/types.secrets.js";

type ApiKeyCredentialLike = AuthProfileCredential & {
  type: "api_key";
  key?: string;
  keyRef?: unknown;
};
type TokenCredentialLike = AuthProfileCredential & {
  type: "token";
  token?: string;
  tokenRef?: unknown;
};

export const collectAuthStoreAssignments: any = undefined as any;
