// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../../../config/types.openclaw.js";
import { resolveManifestProviderOnboardAuthFlags } from "../../../plugins/provider-auth-choices.js";
import { normalizeOptionalString } from "../../../shared/string-coerce.js";
import { CORE_ONBOARD_AUTH_FLAGS } from "../../onboard-core-auth-flags.js";
import type { AuthChoice, OnboardOptions } from "../../onboard-types.js";

type AuthChoiceFlag = {
  optionKey: string;
  authChoice: AuthChoice;
  label: string;
};
export type AuthChoiceInference = {
  choice?: AuthChoice;
  matches: AuthChoiceFlag[];
};

export const inferAuthChoiceFromFlags: any = undefined as any;
