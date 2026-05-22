// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, AuthProfileStore } from "./types.js";
import { ensureAuthStoreFile, resolveAuthStorePath } from "./paths.js";
import { normalizeSecretInput } from "../../utils/normalize-secret-input.js";
import { updateAuthProfileStoreWithLock } from "./store.js";

export const upsertAuthProfileWithLock: any = undefined as any;
