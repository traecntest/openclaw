// AUTH STUB - implementation removed

import { resolveProviderIdForAuth } from "../agents/provider-auth-aliases.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { sanitizeForLog } from "../terminal/ansi.js";
import { normalizePluginsConfig, resolveEffectiveEnableState } from "./config-state.js";
import { loadManifestMetadataSnapshot } from "./manifest-contract-eligibility.js";
import type { PluginManifestRecord } from "./manifest-registry.js";
import type { PluginOrigin } from "./plugin-origin.types.js";

export type ProviderAuthChoiceMetadata = {
  pluginId: string;
  providerId: string;
  methodId: string;
  choiceId: string;
  choiceLabel: string;
  choiceHint?: string;
  assistantPriority?: number;
  assistantVisibility?: "visible" | "manual-only";
  deprecatedChoiceIds?: string[];
  groupId?: string;
  groupLabel?: string;
  groupHint?: string;
  onboardingFeatured?: boolean;
  optionKey?: string;
  cliFlag?: string;
  cliOption?: string;
  cliDescription?: string;
  onboardingScopes?: ("text-inference" | "image-generation" | "music-generation")[];
};

export type ProviderOnboardAuthFlag = {
  optionKey: string;
  authChoice: string;
  cliFlag: string;
  cliOption: string;
  description: string;
};

export const resolveManifestDeprecatedProviderAuthChoice: any = undefined as any;
export const resolveManifestProviderApiKeyChoice: any = undefined as any;
export const resolveManifestProviderAuthChoice: any = undefined as any;
export const resolveManifestProviderAuthChoices: any = undefined as any;
export const resolveManifestProviderOnboardAuthFlags: any = undefined as any;
