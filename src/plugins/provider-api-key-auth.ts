// AUTH STUB - implementation removed

import { upsertAuthProfileWithLock } from "../agents/auth-profiles/profiles.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { SecretInput } from "../config/types.secrets.js";
import { createLazyRuntimeSurface } from "../shared/lazy-runtime.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { normalizeStringEntries } from "../shared/string-normalization.js";
import { normalizeOptionalSecretInput } from "../utils/normalize-secret-input.js";
import type {
  ProviderAuthMethod,
  ProviderAuthMethodNonInteractiveContext,
  ProviderPluginWizardSetup,
} from "./types.js";

export const createProviderApiKeyAuthMethod: any = undefined as any;
