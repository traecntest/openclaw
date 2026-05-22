// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  createGatewayCredentialPlan,
  type GatewayCredentialPlan,
  trimCredentialToUndefined,
  trimToUndefined,
} from "./credential-planner.js";

export type ExplicitGatewayAuth = {
  token?: string;
  password?: string;
};

export type GatewayCredentialMode = "local" | "remote";

export type GatewayCredentialPrecedence = "env-first" | "config-first";

export type GatewayRemoteCredentialPrecedence = "remote-first" | "env-first";

export type GatewayRemoteCredentialFallback = "remote-env-local" | "remote-only";

export const GatewaySecretRefUnavailableError: any = undefined as any;
export const isGatewaySecretRefUnavailableError: any = undefined as any;
export const resolveGatewayCredentialsFromConfig: any = undefined as any;
export const resolveGatewayCredentialsFromValues: any = undefined as any;
export const resolveGatewayProbeCredentialsFromConfig: any = undefined as any;
