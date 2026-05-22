// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { AuthProfileStore, OAuthCredential, OAuthCredentials } from "./types.js";

export type OAuthManagerAdapter = {
  buildApiKey: (
    provider: string,
    credentials: OAuthCredential,
    context: { cfg?: OpenClawConfig; agentDir?: string },
  ) => Promise<string>;
  refreshCredential: (credential: OAuthCredential) => Promise<OAuthCredentials | null>;
  readBootstrapCredential: (params: {
    profileId: string;
    credential: OAuthCredential;
  }) => OAuthCredential | undefined | null;
};

export const OAuthManagerRefreshError: any = undefined as any;
export const createOAuthManager: any = undefined as any;
export const resolveEffectiveOAuthCredential: any = undefined as any;
