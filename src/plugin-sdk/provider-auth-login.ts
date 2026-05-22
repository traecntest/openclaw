/**
 * @deprecated Compatibility subpath for provider-owned login helpers.
 * Use provider auth hooks instead of importing bundled provider login commands.
 */

import { createLazyRuntimeMethodBinder, createLazyRuntimeModule } from "../shared/lazy-runtime.js";

type ProviderAuthLoginRuntime = typeof import("./provider-auth-login.runtime.js");

const loadProviderAuthLoginRuntime = createLazyRuntimeModule(
  () => import("./provider-auth-login.runtime.js"),
);
const bindProviderAuthLoginRuntime = createLazyRuntimeMethodBinder(loadProviderAuthLoginRuntime);

/** @deprecated GitHub Copilot provider-owned login helper; use provider auth hooks instead. */
export const githubCopilotLoginCommand: ProviderAuthLoginRuntime["githubCopilotLoginCommand"] =
  undefined as any;
/** @deprecated Chutes provider-owned login helper; use provider auth hooks instead. */
export const loginChutes: ProviderAuthLoginRuntime["loginChutes"] = undefined as any;
/** @deprecated OpenAI Codex provider-owned login helper; use provider auth hooks instead. */
export const loginOpenAICodexOAuth: ProviderAuthLoginRuntime["loginOpenAICodexOAuth"] =
  undefined as any;
