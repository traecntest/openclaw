// AUTH STUB - implementation removed

import path from "node:path";
import { z } from "zod";
import { privateFileStore } from "../infra/private-file-store.js";
import { safeParseWithSchema } from "../utils/zod-parse.js";
import { ensureAuthProfileStore } from "./auth-profiles/store.js";
import {
  piCredentialsEqual,
  resolvePiCredentialMapFromStore,
  type PiCredential,
} from "./pi-auth-credentials.js";

export const ensurePiAuthJsonFromAuthProfiles: any = undefined as any;
