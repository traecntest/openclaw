// CRON STUB - implementation removed

import crypto from "node:crypto";
import { clearBootstrapSnapshotOnSessionRollover } from "../../agents/bootstrap-cache.js";
import { resolveSessionLifecycleTimestamps } from "../../config/sessions/lifecycle.js";
import { hasSessionAutoModelFallbackProvenance } from "../../config/sessions/model-override-provenance.js";
import { resolveStorePath } from "../../config/sessions/paths.js";
import {
  evaluateSessionFreshness,
  resolveSessionResetPolicy,
} from "../../config/sessions/reset-policy.js";
import { loadSessionStore } from "../../config/sessions/store-load.js";
import type { SessionEntry } from "../../config/sessions/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";

export const resolveCronSession: any = undefined as any;
