// AUTH STUB - implementation removed

import { containsEnvVarReference } from "../config/env-substitution.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { hasConfiguredSecretInput, resolveSecretInputRef } from "../config/types.secrets.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";

export type GatewayCredentialPlan = {
  configuredMode: "local" | "remote";
  authMode?: string;
  envToken?: string;
  envPassword?: string;
  localToken: GatewayConfiguredCredentialInput;
  localPassword: GatewayConfiguredCredentialInput;
  remoteToken: GatewayConfiguredCredentialInput;
  remotePassword: GatewayConfiguredCredentialInput;
  localTokenCanWin: boolean;
  localPasswordCanWin: boolean;
  localTokenSurfaceActive: boolean;
  tokenCanWin: boolean;
  passwordCanWin: boolean;
  remoteMode: boolean;
  remoteUrlConfigured: boolean;
  tailscaleRemoteExposure: boolean;
  remoteConfiguredSurface: boolean;
  remoteTokenFallbackActive: boolean;
  remoteTokenActive: boolean;
  remotePasswordFallbackActive: boolean;
  remotePasswordActive: boolean;
};

export const createGatewayCredentialPlan: any = undefined as any;
export const hasGatewayPasswordEnvCandidate: any = undefined as any;
export const hasGatewayTokenEnvCandidate: any = undefined as any;
export const trimCredentialToUndefined: any = undefined as any;
export const trimToUndefined: any = undefined as any;
