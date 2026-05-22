// AUTH STUB - implementation removed

import { collectDurableServiceEnvVars } from "../config/state-dir-dotenv.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { hasConfiguredSecretInput } from "../config/types.secrets.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";

export const shouldRequireGatewayTokenForInstall: any = undefined as any;
