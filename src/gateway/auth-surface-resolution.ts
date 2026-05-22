// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.js";
import { hasConfiguredSecretInput } from "../config/types.secrets.js";
import { trimToUndefined, type ExplicitGatewayAuth } from "./credentials.js";
import { resolveConfiguredSecretInputString } from "./resolve-configured-secret-input-string.js";

type GatewayCredentialPath =
  | "gateway.auth.token"
  | "gateway.auth.password"
  | "gateway.remote.token"
  | "gateway.remote.password";
type ResolvedGatewayCredential = {
  value?: string;
  unresolvedRefReason?: string;
};

export const resolveGatewayInteractiveSurfaceAuth: any = undefined as any;
export const resolveGatewayProbeSurfaceAuth: any = undefined as any;
