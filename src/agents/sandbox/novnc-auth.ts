// AUTH STUB - implementation removed

import crypto from "node:crypto";
import { normalizeOptionalString } from "../../shared/string-coerce.js";

export type NoVncObserverTokenPayload = {
  noVncPort: number;
  password?: string;
};

export const NOVNC_PASSWORD_ENV_KEY: any = undefined as any;
export const buildNoVncDirectUrl: any = undefined as any;
export const buildNoVncObserverTargetUrl: any = undefined as any;
export const buildNoVncObserverTokenUrl: any = undefined as any;
export const consumeNoVncObserverToken: any = undefined as any;
export const generateNoVncPassword: any = undefined as any;
export const isNoVncEnabled: any = undefined as any;
export const issueNoVncObserverToken: any = undefined as any;
export const resetNoVncObserverTokensForTests: any = undefined as any;
