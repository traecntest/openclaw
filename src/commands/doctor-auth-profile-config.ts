// AUTH STUB - implementation removed

import { splitTrailingAuthProfile } from "../agents/model-ref-profile.js";
import { collectConfiguredModelRefs } from "../config/model-refs.js";
import type { AuthProfileConfig } from "../config/types.auth.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { isRecord } from "../utils.js";

export type AuthProfileConfigProtectionResult = {
  config: OpenClawConfig;
  repairs: string[];
  warnings: string[];
};

export const protectActiveAuthProfileConfig: any = undefined as any;
