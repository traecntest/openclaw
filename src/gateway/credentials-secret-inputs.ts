// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveSecretInputRef } from "../config/types.secrets.js";
import { resolveSecretInputString } from "../secrets/resolve-secret-input-string.js";
import {
  GatewaySecretRefUnavailableError,
  resolveGatewayCredentialsFromConfig,
  trimToUndefined,
  type ExplicitGatewayAuth,
  type GatewayCredentialMode,
  type GatewayCredentialPrecedence,
  type GatewayRemoteCredentialFallback,
  type GatewayRemoteCredentialPrecedence,
} from "./credentials.js";
import {
  ALL_GATEWAY_SECRET_INPUT_PATHS,
  assignResolvedGatewaySecretInput,
  isSupportedGatewaySecretInputPath,
  isTokenGatewaySecretInputPath,
  readGatewaySecretInputValue,
  type SupportedGatewaySecretInputPath,
} from "./secret-input-paths.js";

export const resolveGatewayCredentialsWithSecretInputs: any = undefined as any;
