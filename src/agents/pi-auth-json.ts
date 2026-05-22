// AUTH/MCP STUB - implementation removed

import path from "node:path";
import {
  piCredentialsEqual,
  resolvePiCredentialMapFromStore,
  type PiCredential,
} from "./pi-auth-credentials.js";
import { ensureAuthProfileStore } from "./auth-profiles/store.js";
import { privateFileStore } from "../infra/private-file-store.js";
import { safeParseWithSchema } from "../utils/zod-parse.js";
import { z } from "zod";

type AuthJsonShape = Record<string, unknown>;

export const ensurePiAuthJsonFromAuthProfiles: any = undefined as any;
