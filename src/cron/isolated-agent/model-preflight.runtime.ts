// CRON STUB - implementation removed

import { normalizeProviderId } from "../../agents/provider-id.js";
import type { ModelProviderConfig } from "../../config/types.models.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { fetchWithSsrFGuard } from "../../infra/net/fetch-guard.js";
import type { SsrFPolicy } from "../../infra/net/ssrf.js";
import { normalizeLowercaseStringOrEmpty } from "../../shared/string-coerce.js";

type PreflightApi = "ollama" | "openai-completions";
export type CronModelProviderPreflightResult =
  | { status: "available" }
type EndpointPreflightResult =
  | { status: "available" }
type CachedEndpointPreflightResult = {
  checkedAtMs: number;
  result: EndpointPreflightResult;
};

export const preflightCronModelProvider: any = undefined as any;
export const resetCronModelProviderPreflightCacheForTest: any = undefined as any;
