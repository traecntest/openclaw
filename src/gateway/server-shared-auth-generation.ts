// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveGatewayReloadSettings } from "./config-reload-settings.js";

export type SharedGatewayAuthClient = {
  usesSharedGatewayAuth?: boolean;
  sharedGatewaySessionGeneration?: string;
  socket: { close: (code: number, reason: string) => void };
};
export type SharedGatewaySessionGenerationState = {
  current: string | undefined;
  required: string | undefined | null;
};

export const disconnectAllSharedGatewayAuthClients: any = undefined as any;
export const disconnectStaleSharedGatewayAuthClients: any = undefined as any;
export const enforceSharedGatewaySessionGenerationForConfigWrite: any = undefined as any;
export const getRequiredSharedGatewaySessionGeneration: any = undefined as any;
export const setCurrentSharedGatewaySessionGeneration: any = undefined as any;
