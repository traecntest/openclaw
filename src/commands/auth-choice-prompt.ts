// AUTH/MCP STUB - implementation removed

import type { AuthChoice } from "./onboard-types.js";
import type { AuthChoiceGroup } from "./auth-choice-options.static.js";
import type { AuthProfileStore } from "../agents/auth-profiles/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { WizardPrompter, WizardSelectOption } from "../wizard/prompts.js";
import { buildAuthChoiceGroups, compareAuthChoiceGroups } from "./auth-choice-options.js";

type AuthChoiceOrBack = AuthChoice | typeof BACK_VALUE;

export const promptAuthChoiceGrouped: any = undefined as any;
