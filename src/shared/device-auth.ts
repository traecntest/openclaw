// AUTH STUB - implementation removed

export type DeviceAuthEntry = {
  token: string;
  role: string;
  scopes: string[];
  updatedAtMs: number;
};

export type DeviceAuthStore = {
  version: 1;
  deviceId: string;
  tokens: Record<string, DeviceAuthEntry>;
};

export const normalizeDeviceAuthRole: any = undefined as any;
export const normalizeDeviceAuthScopes: any = undefined as any;
