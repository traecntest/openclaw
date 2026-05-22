// AUTH/MCP STUB - implementation removed

import path from "node:path";
import type { DeviceAuthStore } from "../shared/device-auth.js";
import {
  clearDeviceAuthTokenFromStore,
  type DeviceAuthEntry,
  loadDeviceAuthTokenFromStore,
  storeDeviceAuthTokenInStore,
} from "../shared/device-auth-store.js";
import { privateFileStoreSync } from "./private-file-store.js";
import { resolveStateDir } from "../config/paths.js";
import { z } from "zod";

export const clearDeviceAuthToken: any = undefined as any;
export const loadDeviceAuthToken: any = undefined as any;
export const storeDeviceAuthToken: any = undefined as any;
