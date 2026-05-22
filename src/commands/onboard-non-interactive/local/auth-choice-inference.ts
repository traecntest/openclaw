// AUTH/MCP STUB - implementation removed

import type { AuthChoice, OnboardOptions } from "../../onboard-types.js";
import type { OpenClawConfig } from "../../../config/types.openclaw.js";
import { CORE_ONBOARD_AUTH_FLAGS } from "../../onboard-core-auth-flags.js";
import { normalizeOptionalString } from "../../../shared/string-coerce.js";
import { resolveManifestProviderOnboardAuthFlags } from "../../../plugins/provider-auth-choices.js";

export type AuthChoiceInference = {
  choice?: AuthChoice;
  matches: AuthChoiceFlag[];
};
type AuthChoiceFlag = {
  optionKey: string;
  authChoice: AuthChoice;
  label: string;
};

export const inferAuthChoiceFromFlags: any = undefined as any;
