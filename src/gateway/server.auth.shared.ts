// AUTH STUB - implementation removed

import os from "node:os";
import path from "node:path";
import { expect } from "vitest";
import { WebSocket } from "ws";
import { withEnvAsync } from "../test-utils/env.js";
import { GATEWAY_CLIENT_MODES, GATEWAY_CLIENT_NAMES } from "../utils/message-channel.js";
import { buildDeviceAuthPayload } from "./device-auth.js";
import { MIN_PROBE_PROTOCOL_VERSION, PROTOCOL_VERSION } from "./protocol/index.js";
import {
  createGatewaySuiteHarness,
  connectReq,
  getTrackedConnectChallengeNonce,
  getFreePort,
  installGatewayTestHooks,
  onceMessage,
  rpcReq,
  startGatewayServer,
  startServer,
  startServerWithClient,
  trackConnectChallengeNonce,
  testTailscaleWhois,
  testState,
  withGatewayServer,
} from "./test-helpers.js";

export { ConnectErrorDetailCodes } from "./protocol/connect-error-details.js";
export { getPreauthHandshakeTimeoutMsFromEnv } from "./handshake-timeouts.js";
export { PROTOCOL_VERSION } from "./protocol/index.js";
export { GATEWAY_CLIENT_MODES, GATEWAY_CLIENT_NAMES } from "../utils/message-channel.js";

export const BACKEND_GATEWAY_CLIENT: any = undefined as any;
export const CONTROL_UI_CLIENT: any = undefined as any;
export const MIN_PROBE_PROTOCOL_VERSION: any = undefined as any;
export const NODE_CLIENT: any = undefined as any;
export const TEST_OPERATOR_CLIENT: any = undefined as any;
export const TRUSTED_PROXY_CONTROL_UI_HEADERS: any = undefined as any;
export const approvePendingPairingIfNeeded: any = undefined as any;
export const buildDeviceAuthPayload: any = undefined as any;
export const configureTrustedProxyControlUiAuth: any = undefined as any;
export const connectReq: any = undefined as any;
export const createGatewaySuiteHarness: any = undefined as any;
export const createSignedDevice: any = undefined as any;
export const ensurePairedDeviceTokenForCurrentIdentity: any = undefined as any;
export const expectHelloOkServerVersion: any = undefined as any;
export const getFreePort: any = undefined as any;
export const getTrackedConnectChallengeNonce: any = undefined as any;
export const installGatewayTestHooks: any = undefined as any;
export const onceMessage: any = undefined as any;
export const openTailscaleWs: any = undefined as any;
export const openWs: any = undefined as any;
export const originForPort: any = undefined as any;
export const readConnectChallengeNonce: any = undefined as any;
export const resolveGatewayTokenOrEnv: any = undefined as any;
export const restoreGatewayToken: any = undefined as any;
export const rpcReq: any = undefined as any;
export const sendRawConnectReq: any = undefined as any;
export const startGatewayServer: any = undefined as any;
export const startRateLimitedTokenServerWithPairedDeviceToken: any = undefined as any;
export const startServer: any = undefined as any;
export const startServerWithClient: any = undefined as any;
export const testState: any = undefined as any;
export const testTailscaleWhois: any = undefined as any;
export const trackConnectChallengeNonce: any = undefined as any;
export const waitForWsClose: any = undefined as any;
export const withGatewayServer: any = undefined as any;
export const withRuntimeVersionEnv: any = undefined as any;
export const writeTrustedProxyControlUiConfig: any = undefined as any;
