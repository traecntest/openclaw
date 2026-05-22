// AUTH/MCP STUB - implementation removed

import type {
  ExplicitGatewayAuth,
  GatewayCredentialMode,
  GatewayCredentialPrecedence,
  GatewayRemoteCredentialFallback,
  GatewayRemoteCredentialPrecedence,
} from "./credentials.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveGatewayCredentialsFromConfig } from "./credentials.js";
import { resolveGatewayCredentialsWithSecretInputs } from "./credentials-secret-inputs.js";

export type GatewayConnectionAuthOptions = {
  config: OpenClawConfig;
  env?: NodeJS.ProcessEnv;
  explicitAuth?: ExplicitGatewayAuth;
  urlOverride?: string;
  urlOverrideSource?: "cli" | "env";
  modeOverride?: GatewayCredentialMode;
  localTokenPrecedence?: GatewayCredentialPrecedence;
  localPasswordPrecedence?: GatewayCredentialPrecedence;
  remoteTokenPrecedence?: GatewayRemoteCredentialPrecedence;
  remotePasswordPrecedence?: GatewayRemoteCredentialPrecedence;
  remoteTokenFallback?: GatewayRemoteCredentialFallback;
  remotePasswordFallback?: GatewayRemoteCredentialFallback;
};

export const resolveGatewayConnectionAuth: any = undefined as any;
export const resolveGatewayConnectionAuthFromConfig: any = undefined as any;
