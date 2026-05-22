// AUTH/MCP STUB - implementation removed

import type { OpenClawConfig } from "../config/types.openclaw.js";
import { collectDurableServiceEnvVars } from "../config/state-dir-dotenv.js";
import { hasConfiguredSecretInput } from "../config/types.secrets.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";

type GatewayInstallAuthMode = NonNullable<NonNullable<OpenClawConfig["gateway"]>["auth"]>["mode"];

export const shouldRequireGatewayTokenForInstall: any = undefined as any;
