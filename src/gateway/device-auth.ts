// AUTH/MCP STUB - implementation removed

import { normalizeDeviceMetadataForAuth } from "./device-metadata-normalization.js";

type DeviceAuthPayloadParams = {
  deviceId: string;
  clientId: string;
  clientMode: string;
  role: string;
  scopes: string[];
  signedAtMs: number;
  token?: string | null;
  nonce: string;
};
type DeviceAuthPayloadV3Params = DeviceAuthPayloadParams & {
  platform?: string | null;
  deviceFamily?: string | null;
};

export { normalizeDeviceMetadataForAuth };

export const buildDeviceAuthPayload: any = undefined as any;
export const buildDeviceAuthPayloadV3: any = undefined as any;

