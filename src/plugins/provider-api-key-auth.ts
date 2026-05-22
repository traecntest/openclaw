// AUTH/MCP STUB - implementation removed

import type {
  ProviderAuthMethod,
  ProviderAuthMethodNonInteractiveContext,
  ProviderPluginWizardSetup,
} from "./types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { SecretInput } from "../config/types.secrets.js";
import { createLazyRuntimeSurface } from "../shared/lazy-runtime.js";
import { normalizeOptionalSecretInput } from "../utils/normalize-secret-input.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { normalizeStringEntries } from "../shared/string-normalization.js";
import { upsertAuthProfileWithLock } from "../agents/auth-profiles/profiles.js";

type ProviderApiKeyAuthMethodOptions = {
  providerId: string;
  methodId: string;
  label: string;
  hint?: string;
  wizard?: ProviderPluginWizardSetup;
  optionKey: string;
  flagName: `--${string}`;
  envVar: string;
  promptMessage: string;
  profileId?: string;
  profileIds?: string[];
  allowProfile?: boolean;
  defaultModel?: string;
  expectedProviders?: string[];
  metadata?: Record<string, string>;
  noteMessage?: string;
  noteTitle?: string;
  applyConfig?: (cfg: OpenClawConfig) => OpenClawConfig;
};
type UpsertAuthProfileParams = Parameters<typeof upsertAuthProfileWithLock>[0];

export const createProviderApiKeyAuthMethod: any = undefined as any;
