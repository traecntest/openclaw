// AUTH/MCP STUB - implementation removed

import type { AuthChoice, AuthChoiceGroupId } from "./onboard-types.js";
import type { AuthProfileStore } from "../agents/auth-profiles/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  CORE_AUTH_CHOICE_OPTIONS,
  type AuthChoiceGroup,
  type AuthChoiceOption,
  formatStaticAuthChoiceChoicesForCli,
} from "./auth-choice-options.static.js";
import { resolveProviderSetupFlowContributions } from "../flows/provider-flow.js";

export const buildAuthChoiceGroups: any = undefined as any;
export const buildAuthChoiceOptions: any = undefined as any;
export const compareAuthChoiceGroups: any = undefined as any;
export const formatAuthChoiceChoicesForCli: any = undefined as any;
