// AUTH/MCP STUB - implementation removed

import type { DoctorPrompter } from "./doctor-prompter.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { ensureAuthProfileStore } from "../agents/auth-profiles/store.js";
import { repairOAuthProfileIdMismatch } from "../agents/auth-profiles/repair.js";
import { sanitizeForLog } from "../terminal/ansi.js";

export const maybeRepairLegacyOAuthProfileIds: any = undefined as any;
