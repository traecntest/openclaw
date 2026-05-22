// AUTH STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { loadBundledPluginPublicSurfaceModuleSync } from "./facade-loader.js";

export type BrowserControlAuth = {
  token?: string;
  password?: string;
};

export const ensureBrowserControlAuth: any = undefined as any;
export const resolveBrowserControlAuth: any = undefined as any;
export const shouldAutoGenerateBrowserAuth: any = undefined as any;
