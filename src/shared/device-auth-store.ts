// AUTH STUB - implementation removed

import {
  type DeviceAuthEntry,
  type DeviceAuthStore,
  normalizeDeviceAuthRole,
  normalizeDeviceAuthScopes,
} from "./device-auth.js";

export type DeviceAuthStoreAdapter = {
  readStore: () => DeviceAuthStore | null;
  writeStore: (store: DeviceAuthStore) => void;
};

export const clearDeviceAuthTokenFromStore: any = undefined as any;
export const loadDeviceAuthTokenFromStore: any = undefined as any;
export const storeDeviceAuthTokenInStore: any = undefined as any;
