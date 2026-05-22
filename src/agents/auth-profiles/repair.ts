// AUTH/MCP STUB - implementation removed

import type { AuthProfileConfig } from "../../config/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { findNormalizedProviderKey, normalizeProviderId } from "../provider-id.js";
import { resolveAuthProfileMetadata } from "./identity.js";
import { dedupeProfileIds, listProfilesForProvider } from "./profile-list.js";
import type { AuthProfileIdRepairResult, AuthProfileStore } from "./types.js";

export const repairOAuthProfileIdMismatch: any = undefined as any;
export const suggestOAuthProfileIdForLegacyDefault: any = undefined as any;
