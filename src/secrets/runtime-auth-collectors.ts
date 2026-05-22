// AUTH STUB - implementation removed

import { assertNoOAuthSecretRefPolicyViolations } from "../agents/auth-profiles/policy.js";
import type { AuthProfileCredential, AuthProfileStore } from "../agents/auth-profiles/types.js";
import { resolveSecretInputRef } from "../config/types.secrets.js";
import {
  pushAssignment,
  pushWarning,
  type ResolverContext,
  type SecretDefaults,
} from "./runtime-shared.js";
import { isNonEmptyString } from "./shared.js";

export const collectAuthStoreAssignments: any = undefined as any;
