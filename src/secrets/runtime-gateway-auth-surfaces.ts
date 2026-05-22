// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { createGatewayCredentialPlan } from "../gateway/credential-planner.js";
import type { SecretDefaults } from "./runtime-shared.js";
import { isRecord } from "./shared.js";

export type GatewayAuthSurfacePath = (typeof GATEWAY_AUTH_SURFACE_PATHS)[number];

export type GatewayAuthSurfaceState = {
  path: GatewayAuthSurfacePath;
  active: boolean;
  reason: string;
  hasSecretRef: boolean;
};

export type GatewayAuthSurfaceStateMap = Record<GatewayAuthSurfacePath, GatewayAuthSurfaceState>;

export const GATEWAY_AUTH_SURFACE_PATHS: any = undefined as any;
export const evaluateGatewayAuthSurfaceStates: any = undefined as any;
