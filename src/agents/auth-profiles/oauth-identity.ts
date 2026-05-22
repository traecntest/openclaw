// AUTH/MCP STUB - implementation removed

import type { AuthProfileCredential, OAuthCredential } from "./types.js";

export type OAuthMirrorDecisionReason =
  | "no-existing-credential"
  | "incoming-fresher"
  | "non-oauth-existing-credential"
  | "provider-mismatch"
  | "identity-mismatch-or-regression"
  | "incoming-not-fresher";
export type OAuthMirrorDecision =
  | {
      shouldMirror: true;
      reason: Extract<OAuthMirrorDecisionReason, "no-existing-credential" | "incoming-fresher">;
    }

export const isSafeToCopyOAuthIdentity: any = undefined as any;
export const isSameOAuthIdentity: any = undefined as any;
export const normalizeAuthEmailToken: any = undefined as any;
export const normalizeAuthIdentityToken: any = undefined as any;
export const shouldMirrorRefreshedOAuthCredential: any = undefined as any;
