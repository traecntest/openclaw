// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  resolveConfiguredSecretInputString,
  type SecretInputUnresolvedReasonStyle,
} from "./resolve-configured-secret-input-string.js";
import { resolveSecretInputRef } from "../config/types.secrets.js";
import { trimToUndefined } from "./credentials.js";

type GatewayAuthTokenEnvFallback = "never" | "no-secret-ref" | "always";
type GatewayAuthTokenResolutionSource = "explicit" | "config" | "secretRef" | "env";

export const resolveGatewayAuthToken: any = undefined as any;
