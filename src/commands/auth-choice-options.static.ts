// AUTH/MCP STUB - implementation removed

import type { AuthChoice, AuthChoiceGroupId } from "./onboard-types.js";
import { resolveLegacyAuthChoiceAliasesForCli } from "./auth-choice-legacy.js";

export type AuthChoiceGroup = {
  value: AuthChoiceGroupId;
  label: string;
  hint?: string;
  options: AuthChoiceOption[];
};
export type AuthChoiceOption = {
  value: AuthChoice;
  label: string;
  hint?: string;
  groupId?: AuthChoiceGroupId;
  groupLabel?: string;
  groupHint?: string;
  assistantPriority?: number;
  assistantVisibility?: "visible" | "manual-only";
  onboardingFeatured?: boolean;
};

export const CORE_AUTH_CHOICE_OPTIONS: any = undefined as any;
export const formatStaticAuthChoiceChoicesForCli: any = undefined as any;
