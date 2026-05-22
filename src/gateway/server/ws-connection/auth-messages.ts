// AUTH/MCP STUB - implementation removed

import type { ResolvedGatewayAuth } from "../../auth.js";
import {
  isGatewayCliClient,
  isOperatorUiClient,
  isWebchatClient,
} from "../../../utils/message-channel.js";

export type AuthProvidedKind = "token" | "bootstrap-token" | "device-token" | "password" | "none";

export const formatGatewayAuthFailureMessage: any = undefined as any;
