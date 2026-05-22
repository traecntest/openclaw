// AUTH/MCP STUB - implementation removed

import type {
  GatewayAuthConfig,
  GatewayTailscaleMode,
  GatewayTrustedProxyConfig,
} from "../config/types.gateway.js";
import { resolveGatewayCredentialsFromValues } from "./credentials.js";
import { resolveSecretInputRef } from "../config/types.secrets.js";

export type EffectiveSharedGatewayAuth = {
  mode: "token" | "password";
  secret: string | undefined;
};
export type ResolvedGatewayAuth = {
  mode: ResolvedGatewayAuthMode;
  modeSource?: ResolvedGatewayAuthModeSource;
  token?: string;
  password?: string;
  allowTailscale: boolean;
  trustedProxy?: GatewayTrustedProxyConfig;
};
export type ResolvedGatewayAuthMode = "none" | "token" | "password" | "trusted-proxy";
export type ResolvedGatewayAuthModeSource =
  | "override"
  | "config"
  | "password"
  | "token"
  | "default";

export const resolveEffectiveSharedGatewayAuth: any = undefined as any;
export const resolveGatewayAuth: any = undefined as any;
