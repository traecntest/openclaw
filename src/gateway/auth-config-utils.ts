// AUTH STUB - implementation removed

import type { GatewayAuthConfig } from "../config/types.gateway.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { hasConfiguredSecretInput } from "../config/types.secrets.js";
import { resolveRequiredConfiguredSecretRefInputString } from "./resolve-configured-secret-input-string.js";
import {
  assignResolvedGatewaySecretInput,
  readGatewaySecretInputValue,
  type SupportedGatewaySecretInputPath,
} from "./secret-input-paths.js";

export const hasConfiguredGatewayAuthSecretInput: any = undefined as any;
export const materializeGatewayAuthSecretRefs: any = undefined as any;
export const resolveGatewayPasswordSecretRefValue: any = undefined as any;
export const resolveGatewayTokenSecretRefValue: any = undefined as any;
