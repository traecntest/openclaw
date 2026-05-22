// AUTH/MCP STUB - implementation removed

import {
  defineLegacyConfigMigration,
  type LegacyConfigMigrationSpec,
  type LegacyConfigRule,
} from "../../../config/legacy.shared.js";
import {
  isKnownCliMcpTypeAlias,
  resolveOpenClawMcpTransportAlias,
} from "../../../config/mcp-config-normalize.js";
import { isRecord } from "./legacy-config-record-shared.js";

export const LEGACY_CONFIG_MIGRATIONS_RUNTIME_MCP: any = undefined as any;
