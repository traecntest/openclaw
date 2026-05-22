// AUTH STUB - implementation removed

import type { PluginRegistry } from "../../../plugins/registry.js";
import {
  isProtectedPluginRoutePathFromContext,
  resolvePluginRoutePathContext,
  type PluginRoutePathContext,
} from "./path-context.js";
import { findMatchingPluginHttpRoutes } from "./route-match.js";

export const matchedPluginRoutesRequireGatewayAuth: any = undefined as any;
export const shouldEnforceGatewayAuthForPluginPath: any = undefined as any;
