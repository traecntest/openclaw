// AUTH/MCP STUB - implementation removed

import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import type { DoctorOptions, DoctorPrompter } from "./doctor-prompter.js";
import type { RuntimeEnv } from "../runtime.js";
import {
  auditGatewayServiceConfig,
  needsNodeRuntimeMigration,
  readEmbeddedGatewayToken,
  SERVICE_AUDIT_CODES,
} from "../daemon/service-audit.js";
import {
  confirmDoctorServiceRepair,
  EXTERNAL_SERVICE_REPAIR_NOTE,
  isServiceRepairExternallyManaged,
  resolveServiceRepairPolicy,
} from "./doctor-service-repair-policy.js";
import {
  findExtraGatewayServices,
  renderGatewayServiceCleanupHints,
  type ExtraGatewayService,
} from "../daemon/inspect.js";
import {
  isSystemdUnitActive,
  uninstallLegacySystemdUnits,
  type SystemdUnitScope,
} from "../daemon/systemd.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { DEFAULT_GATEWAY_DAEMON_RUNTIME, type GatewayDaemonRuntime } from "./daemon-runtime.js";
import { OPENCLAW_WRAPPER_ENV_KEY } from "../daemon/program-args.js";
import { buildGatewayInstallPlan } from "./daemon-install-helpers.js";
import { execFile } from "node:child_process";
import { isDoctorUpdateRepairMode } from "./doctor-repair-mode.js";
import { note } from "../terminal/note.js";
import { promisify } from "node:util";
import { readManagedServiceEnvKeysFromEnvironment } from "../daemon/service-managed-env.js";
import { renderSystemNodeWarning, resolveSystemNodeInfo } from "../daemon/runtime-paths.js";
import { replaceConfigFile, type OpenClawConfig } from "../config/config.js";
import { resolveGatewayAuthTokenForService } from "./doctor-gateway-auth-token.js";
import { resolveGatewayPort, resolveIsNixMode } from "../config/paths.js";
import { resolveGatewayService, type GatewayServiceCommandConfig } from "../daemon/service.js";
import { resolveSecretInputRef } from "../config/types.secrets.js";
import { summarizeGatewayServiceLayout } from "../daemon/service-layout.js";

export const maybeRepairGatewayServiceConfig: any = undefined as any;
export const maybeScanExtraGatewayServices: any = undefined as any;
