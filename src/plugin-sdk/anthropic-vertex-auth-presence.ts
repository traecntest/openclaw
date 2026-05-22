// AUTH/MCP STUB - implementation removed

import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { homedir, platform } from "node:os";
import { join } from "node:path";
import { normalizeOptionalSecretInput } from "../utils/normalize-secret-input.js";
import { readFileSync } from "node:fs";

export const hasAnthropicVertexAvailableAuth: any = undefined as any;
