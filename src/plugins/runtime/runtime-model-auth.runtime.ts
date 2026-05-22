// AUTH/MCP STUB - implementation removed

import type { Api, Model } from "@earendil-works/pi-ai";
import {
  getApiKeyForModel as resolveModelApiKey,
  resolveApiKeyForProvider as resolveProviderApiKey,
} from "../../agents/model-auth.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { prepareProviderRuntimeAuth } from "../provider-runtime.runtime.js";
import type { ResolvedProviderRuntimeAuth } from "./model-auth-types.js";

export const getApiKeyForModel: any = undefined as any;
export const getRuntimeAuthForModel: any = undefined as any;
export const resolveApiKeyForProvider: any = undefined as any;
