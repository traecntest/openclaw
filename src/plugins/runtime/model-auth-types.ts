// AUTH/MCP STUB - implementation removed

import type { ResolvedProviderAuth } from "../../agents/model-auth-runtime-shared.js";
import type { ModelProviderRequestTransportOverrides } from "../../agents/provider-request-config.js";

export type ResolvedProviderRuntimeAuth = Omit<ResolvedProviderAuth, "apiKey"> & {
  apiKey?: string;
  baseUrl?: string;
  request?: ModelProviderRequestTransportOverrides;
  expiresAt?: number;
};

