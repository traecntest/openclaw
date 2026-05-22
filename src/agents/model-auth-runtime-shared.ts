// AUTH STUB - implementation removed

import { normalizeSecretInput } from "../utils/normalize-secret-input.js";

export type ResolvedProviderAuth = {
  apiKey?: string;
  profileId?: string;
  source: string;
  mode: "api-key" | "oauth" | "token" | "aws-sdk";
};

export const formatMissingAuthError: any = undefined as any;
export const requireApiKey: any = undefined as any;
export const resolveAwsSdkEnvVarName: any = undefined as any;
