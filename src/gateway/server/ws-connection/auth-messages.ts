// AUTH/MCP STUB - implementation removed

import {
  isGatewayCliClient,
  isOperatorUiClient,
  isWebchatClient,
} from "../../../utils/message-channel.js";
import type { ResolvedGatewayAuth } from "../../auth.js";

export type AuthProvidedKind = "token" | "bootstrap-token" | "device-token" | "password" | "none";

export const formatGatewayAuthFailureMessage: any = undefined as any;
