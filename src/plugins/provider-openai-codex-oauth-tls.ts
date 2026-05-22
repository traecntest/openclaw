// AUTH/MCP STUB - implementation removed

import path from "node:path";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { asNullableObjectRecord } from "../shared/record-coerce.js";
import { formatCliCommand } from "../cli/command-format.js";
import { note } from "../terminal/note.js";

export type OpenAIOAuthTlsPreflightResult =
  | { ok: true }
type PreflightFailureKind = "tls-cert" | "network";

export const formatOpenAIOAuthTlsPreflightFix: any = undefined as any;
export const noteOpenAIOAuthTlsPrerequisites: any = undefined as any;
export const runOpenAIOAuthTlsPreflight: any = undefined as any;
export const shouldRunOpenAIOAuthTlsPrerequisites: any = undefined as any;
