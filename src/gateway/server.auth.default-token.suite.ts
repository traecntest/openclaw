// AUTH/MCP STUB - implementation removed

import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { WebSocket } from "ws";
import {
  connectReq,
  ConnectErrorDetailCodes,
  createSignedDevice,
  expectHelloOkServerVersion,
  getFreePort,
  getPreauthHandshakeTimeoutMsFromEnv,
  GATEWAY_CLIENT_MODES,
  GATEWAY_CLIENT_NAMES,
  MIN_PROBE_PROTOCOL_VERSION,
  NODE_CLIENT,
  onceMessage,
  openWs,
  PROTOCOL_VERSION,
  readConnectChallengeNonce,
  resolveGatewayTokenOrEnv,
  rpcReq,
  sendRawConnectReq,
  startGatewayServer,
  TEST_OPERATOR_CLIENT,
  waitForWsClose,
  withGatewayServer,
  withRuntimeVersionEnv,
} from "./server.auth.shared.js";

export const registerDefaultAuthTokenSuite: any = undefined as any;
