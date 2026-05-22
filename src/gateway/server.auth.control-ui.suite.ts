// AUTH/MCP STUB - implementation removed

import os from "node:os";
import path from "node:path";
import {
  BACKEND_GATEWAY_CLIENT,
  connectReq,
  configureTrustedProxyControlUiAuth,
  CONTROL_UI_CLIENT,
  ConnectErrorDetailCodes,
  createSignedDevice,
  ensurePairedDeviceTokenForCurrentIdentity,
  GATEWAY_CLIENT_MODES,
  GATEWAY_CLIENT_NAMES,
  onceMessage,
  openTailscaleWs,
  openWs,
  originForPort,
  readConnectChallengeNonce,
  restoreGatewayToken,
  rpcReq,
  startRateLimitedTokenServerWithPairedDeviceToken,
  startGatewayServer,
  startServer,
  startServerWithClient,
  TEST_OPERATOR_CLIENT,
  testState,
  TRUSTED_PROXY_CONTROL_UI_HEADERS,
  waitForWsClose,
  withGatewayServer,
  writeTrustedProxyControlUiConfig,
} from "./server.auth.shared.js";
import { WebSocket } from "ws";
import { expect, test, vi } from "vitest";

export const registerControlUiAndPairingSuite: any = undefined as any;
