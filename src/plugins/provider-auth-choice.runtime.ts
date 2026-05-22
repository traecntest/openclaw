// AUTH/MCP STUB - implementation removed

import {
  resolveProviderPluginChoice as resolveProviderPluginChoiceImpl,
  runProviderModelSelectedHook as runProviderModelSelectedHookImpl,
} from "./provider-wizard.js";
import { resolvePluginProviders as resolvePluginProvidersImpl } from "./providers.runtime.js";
import { resolvePluginSetupProvider as resolvePluginSetupProviderImpl } from "./setup-registry.js";

type ResolveProviderPluginChoice =
  typeof import("./provider-wizard.js").resolveProviderPluginChoice;
type RunProviderModelSelectedHook =
  typeof import("./provider-wizard.js").runProviderModelSelectedHook;
type ResolvePluginProviders = typeof import("./providers.runtime.js").resolvePluginProviders;
type ResolvePluginSetupProvider = typeof import("./setup-registry.js").resolvePluginSetupProvider;

export const resolvePluginProviders: any = undefined as any;
export const resolvePluginSetupProvider: any = undefined as any;
export const resolveProviderPluginChoice: any = undefined as any;
export const runProviderModelSelectedHook: any = undefined as any;
