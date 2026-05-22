// AUTH STUB - implementation removed

import { formatRemainingShort } from "../../agents/auth-health.js";
import { resolveAuthProfileDisplayLabel } from "../../agents/auth-profiles/display.js";
import { resolveAuthStorePathForDisplay } from "../../agents/auth-profiles/paths.js";
import { loadPersistedAuthProfileStore } from "../../agents/auth-profiles/persisted.js";
import { listProfilesForProvider } from "../../agents/auth-profiles/profiles.js";
import type { AuthProfileStore } from "../../agents/auth-profiles/types.js";
import { resolveProfileUnusableUntilForDisplay } from "../../agents/auth-profiles/usage.js";
import { isNonSecretApiKeyMarker } from "../../agents/model-auth-markers.js";
import {
  getCustomProviderApiKey,
  resolveEnvApiKey,
  resolveUsableCustomProviderApiKey,
} from "../../agents/model-auth.js";
import { normalizeProviderIdForAuth } from "../../agents/provider-id.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { ProviderAuthEvidence } from "../../secrets/provider-env-vars.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../../shared/string-coerce.js";
import { shortenHomePath } from "../../utils.js";
import { maskApiKey } from "./list.format.js";
import type { ProviderAuthOverview } from "./list.types.js";

export const resolveProviderAuthOverview: any = undefined as any;
