// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { resolveGatewayCredentialsWithSecretInputs } from "./credentials-secret-inputs.js";
import {
  type ExplicitGatewayAuth,
  isGatewaySecretRefUnavailableError,
  resolveGatewayProbeCredentialsFromConfig,
} from "./credentials.js";

export { resolveGatewayProbeTarget } from "./probe-target.js";

export const resolveGatewayProbeAuth: any = undefined as any;
export const resolveGatewayProbeAuthSafe: any = undefined as any;
export const resolveGatewayProbeAuthSafeWithSecretInputs: any = undefined as any;
export const resolveGatewayProbeAuthWithSecretInputs: any = undefined as any;
