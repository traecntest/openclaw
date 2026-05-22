// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { SessionEntry } from "../../config/sessions/types.js";
import {
  isConfiguredAwsSdkAuthProfileForProvider,
  isStoredCredentialCompatibleWithAuthProvider,
  resolveAuthProfileOrder,
} from "../auth-profiles/order.js";
import { createLazyImportLoader } from "../../shared/lazy-promise.js";
import { ensureAuthProfileStore, hasAnyAuthProfileStoreSource } from "../auth-profiles/store.js";
import { isProfileInCooldown } from "../auth-profiles/usage.js";

export const clearSessionAuthProfileOverride: any = undefined as any;
export const resolveSessionAuthProfileOverride: any = undefined as any;
