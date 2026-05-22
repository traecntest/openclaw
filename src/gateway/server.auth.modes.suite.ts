// AUTH/MCP STUB - implementation removed

import {
  connectReq,
  CONTROL_UI_CLIENT,
  ConnectErrorDetailCodes,
  getFreePort,
  openTailscaleWs,
  openWs,
  originForPort,
  rpcReq,
  restoreGatewayToken,
  startGatewayServer,
  testState,
  testTailscaleWhois,
} from "./server.auth.shared.js";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";

export const registerAuthModesSuite: any = undefined as any;
