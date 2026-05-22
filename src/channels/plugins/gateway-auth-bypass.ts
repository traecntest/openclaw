// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { loadBundledPluginPublicArtifactModuleSync } from "../../plugins/public-surface-loader.js";

type GatewayAuthBypassApi = {
  resolveGatewayAuthBypassPaths?: (params: { cfg: OpenClawConfig }) => readonly unknown[];
};

export const resolveBundledChannelGatewayAuthBypassPaths: any = undefined as any;
