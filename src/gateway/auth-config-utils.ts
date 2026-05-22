// AUTH/MCP STUB - implementation removed

import type { GatewayAuthConfig } from "../config/types.gateway.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  assignResolvedGatewaySecretInput,
  readGatewaySecretInputValue,
  type SupportedGatewaySecretInputPath,
} from "./secret-input-paths.js";
import { hasConfiguredSecretInput } from "../config/types.secrets.js";
import { resolveRequiredConfiguredSecretRefInputString } from "./resolve-configured-secret-input-string.js";

type GatewayAuthSecretInputPath = Extract<
  SupportedGatewaySecretInputPath,
  "gateway.auth.token" | "gateway.auth.password"
>;
type GatewayAuthSecretRefResolutionParams = {
  cfg: OpenClawConfig;
  env: NodeJS.ProcessEnv;
  mode?: GatewayAuthConfig["mode"];
  hasPasswordCandidate: boolean;
  hasTokenCandidate: boolean;
};

export const hasConfiguredGatewayAuthSecretInput: any = undefined as any;
export const materializeGatewayAuthSecretRefs: any = undefined as any;
export const resolveGatewayPasswordSecretRefValue: any = undefined as any;
export const resolveGatewayTokenSecretRefValue: any = undefined as any;
