// AUTH/MCP STUB - implementation removed

import type { ModelProviderRequestTransportOverrides } from "../../agents/provider-request-config.js";
import type { ResolvedProviderAuth } from "../../agents/model-auth-runtime-shared.js";

export type ResolvedProviderRuntimeAuth = Omit<ResolvedProviderAuth, "apiKey"> & {
  apiKey?: string;
  baseUrl?: string;
  request?: ModelProviderRequestTransportOverrides;
  expiresAt?: number;
};

