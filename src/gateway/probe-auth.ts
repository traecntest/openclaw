// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  type ExplicitGatewayAuth,
  isGatewaySecretRefUnavailableError,
  resolveGatewayProbeCredentialsFromConfig,
} from "./credentials.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { resolveGatewayCredentialsWithSecretInputs } from "./credentials-secret-inputs.js";

export type { GatewayProbeTargetResolution } from "./probe-target.js";
export { resolveGatewayProbeTarget } from "./probe-target.js";

export const resolveGatewayProbeAuth: any = undefined as any;
export const resolveGatewayProbeAuthSafe: any = undefined as any;
export const resolveGatewayProbeAuthSafeWithSecretInputs: any = undefined as any;
export const resolveGatewayProbeAuthWithSecretInputs: any = undefined as any;
