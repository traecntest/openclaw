// CRON STUB - implementation removed

import { parseExplicitTargetForLoadedChannel } from "../../channels/plugins/target-parsing-loaded.js";
import type { ChannelId } from "../../channels/plugins/types.public.js";
import { resolveAgentMainSessionKey } from "../../config/sessions/main-session.js";
import { resolveStorePath } from "../../config/sessions/paths.js";
import { loadSessionStore } from "../../config/sessions/store-load.js";
import type { SessionEntry } from "../../config/sessions/types.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import { formatErrorMessage } from "../../infra/errors.js";
import { maybeResolveIdLikeTarget } from "../../infra/outbound/target-id-resolution.js";
import { normalizeTargetForProvider } from "../../infra/outbound/target-normalization.js";
import { tryResolveLoadedOutboundTarget } from "../../infra/outbound/targets-loaded.js";
import { resolveSessionDeliveryTarget } from "../../infra/outbound/targets-session.js";
import type { OutboundChannel } from "../../infra/outbound/targets.js";
import { normalizeAccountId } from "../../routing/session-key.js";
import { createLazyImportLoader } from "../../shared/lazy-promise.js";
import { resolveCronStoredDeliveryContext } from "../delivery-context.js";
import { resolveCronAgentSessionKey } from "./session-key.js";

export type DeliveryTargetResolution =
  | {
      ok: true;
      channel: Exclude<OutboundChannel, "none">;
      to: string;
      accountId?: string;
      threadId?: string | number;
      mode: "explicit" | "implicit";
    }

export const resolveDeliveryTarget: any = undefined as any;
