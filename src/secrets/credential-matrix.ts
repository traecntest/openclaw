// AUTH/MCP STUB - implementation removed

import { getSourceSecretTargetRegistry } from "./target-registry-data.js";
import { getUnsupportedSecretRefSurfacePatterns } from "./unsupported-surface-policy.js";

type CredentialMatrixEntry = {
  id: string;
  configFile: "openclaw.json" | "auth-profiles.json";
  path: string;
  refPath?: string;
  when?: { type: "api_key" | "token" };
  secretShape: "secret_input" | "sibling_ref"; // pragma: allowlist secret
  optIn: true;
  notes?: string;
};
export type SecretRefCredentialMatrixDocument = {
  version: 1;
  matrixId: "strictly-user-supplied-credentials";
  pathSyntax: 'Dot path with "*" for map keys and "[]" for arrays.';
  scope: "Credentials that are strictly user-supplied and not minted/rotated by OpenClaw runtime.";
  excludedMutableOrRuntimeManaged: string[];
  entries: CredentialMatrixEntry[];
};

export const buildSecretRefCredentialMatrix: any = undefined as any;
