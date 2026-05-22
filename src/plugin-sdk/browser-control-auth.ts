// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { loadBundledPluginPublicSurfaceModuleSync } from "./facade-loader.js";

export type BrowserControlAuth = {
  token?: string;
  password?: string;
};
type BrowserControlAuthSurface = {
  resolveBrowserControlAuth: (cfg?: OpenClawConfig, env?: NodeJS.ProcessEnv) => BrowserControlAuth;
  shouldAutoGenerateBrowserAuth: (env: NodeJS.ProcessEnv) => boolean;
  ensureBrowserControlAuth: (
    params: EnsureBrowserControlAuthParams,
  ) => Promise<EnsureBrowserControlAuthResult>;
};
type EnsureBrowserControlAuthParams = {
  cfg: OpenClawConfig;
  env?: NodeJS.ProcessEnv;
};
type EnsureBrowserControlAuthResult = {
  auth: BrowserControlAuth;
  generatedToken?: string;
};

export const ensureBrowserControlAuth: any = undefined as any;
export const resolveBrowserControlAuth: any = undefined as any;
export const shouldAutoGenerateBrowserAuth: any = undefined as any;
