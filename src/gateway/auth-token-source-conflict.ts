// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { normalizeSecretInputString, resolveSecretInputRef } from "../config/types.secrets.js";

export type GatewayAuthTokenSourceConflict = {
  checkId: "gateway.env_token_overrides_config";
  title: string;
  detail: string;
  remediation: string;
  warningLines: string[];
  diagnostic: string;
};

export const resolveGatewayAuthTokenSourceConflict: any = undefined as any;
