// AUTH STUB - implementation removed

import {
  normalizeHeadersInitForFetch,
  normalizeRequestInitHeadersForFetch,
} from "../infra/fetch-headers.js";

export type ScopeTokenProvider = {
  getAccessToken: (scope: string) => Promise<string>;
};

export const fetchWithBearerAuthScopeFallback: any = undefined as any;
