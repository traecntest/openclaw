// AUTH STUB - implementation removed

import { repairOAuthProfileIdMismatch } from "../agents/auth-profiles/repair.js";
import { ensureAuthProfileStore } from "../agents/auth-profiles/store.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { sanitizeForLog } from "../terminal/ansi.js";
import type { DoctorPrompter } from "./doctor-prompter.js";

export const maybeRepairLegacyOAuthProfileIds: any = undefined as any;
