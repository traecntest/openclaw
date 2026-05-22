// AUTH STUB - implementation removed

import path from "node:path";
import { z } from "zod";
import { resolveStateDir } from "../config/paths.js";
import {
  clearDeviceAuthTokenFromStore,
  type DeviceAuthEntry,
  loadDeviceAuthTokenFromStore,
  storeDeviceAuthTokenInStore,
} from "../shared/device-auth-store.js";
import type { DeviceAuthStore } from "../shared/device-auth.js";
import { privateFileStoreSync } from "./private-file-store.js";

export const clearDeviceAuthToken: any = undefined as any;
export const loadDeviceAuthToken: any = undefined as any;
export const storeDeviceAuthToken: any = undefined as any;
