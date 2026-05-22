// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import {
  ensureAuthProfileStore,
  resolveAuthProfileOrder,
  resolveEnvApiKey,
  resolveUsableCustomProviderApiKey,
} from "../../agents/model-auth.js";
import {
  isConfiguredAwsSdkAuthProfileForProvider,
  isProfileInCooldown,
  resolveAuthProfileDisplayLabel,
  resolveAuthStorePathForDisplay,
} from "../../agents/auth-profiles.js";
import { coerceSecretRef } from "../../config/types.secrets.js";
import { findNormalizedProviderValue, normalizeProviderId } from "../../agents/model-selection.js";
import { formatRemainingShort } from "../../agents/auth-health.js";
import { maskApiKey } from "../../utils/mask-api-key.js";
import { normalizeLowercaseStringOrEmpty } from "../../shared/string-coerce.js";
import { shortenHomePath } from "../../utils.js";

export type ModelAuthDetailMode = "compact" | "verbose";

export const formatAuthLabel: any = undefined as any;
export const resolveAuthLabel: any = undefined as any;
