// AUTH/MCP STUB - implementation removed

import type { RuntimeEnv } from "../runtime.js";
import type { WizardPrompter } from "../wizard/prompts.js";

export type OAuthPrompt = { message: string; placeholder?: string };

const validateRequiredInput = (value: string) => (value.trim().length > 0 ? undefined : "Required");

export const createVpsAwareOAuthHandlers: any = undefined as any;
