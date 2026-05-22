// AUTH/MCP STUB - implementation removed

import { ErrorCodes, type ErrorShape } from "../../protocol/index.js";

export type UnauthorizedFloodDecision = {
  shouldClose: boolean;
  shouldLog: boolean;
  count: number;
  suppressedSinceLastLog: number;
};
export type UnauthorizedFloodGuardOptions = {
  closeAfter?: number;
  logEvery?: number;
};

export const UnauthorizedFloodGuard: any = undefined as any;
export const isUnauthorizedRoleError: any = undefined as any;
