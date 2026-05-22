// AUTH STUB - implementation removed

import { formatRemainingShort } from "../../agents/auth-health.js";
import {
  isConfiguredAwsSdkAuthProfileForProvider,
  isProfileInCooldown,
  resolveAuthProfileDisplayLabel,
  resolveAuthStorePathForDisplay,
} from "../../agents/auth-profiles.js";
import {
  ensureAuthProfileStore,
  resolveAuthProfileOrder,
  resolveEnvApiKey,
  resolveUsableCustomProviderApiKey,
} from "../../agents/model-auth.js";
import { findNormalizedProviderValue, normalizeProviderId } from "../../agents/model-selection.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { coerceSecretRef } from "../../config/types.secrets.js";
import { normalizeLowercaseStringOrEmpty } from "../../shared/string-coerce.js";
import { shortenHomePath } from "../../utils.js";
import { maskApiKey } from "../../utils/mask-api-key.js";

export type ModelAuthDetailMode = "compact" | "verbose";

export const formatAuthLabel: any = undefined as any;
export const resolveAuthLabel: any = undefined as any;
