// AUTH/MCP STUB - implementation removed

import type { ChannelId } from "../channels/plugins/types.public.js";
import type { ChannelPlugin } from "../channels/plugins/types.plugin.js";
import type { MsgContext } from "./templating.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  INTERNAL_MESSAGE_CHANNEL,
  isInternalMessageChannel,
  normalizeMessageChannel,
} from "../utils/message-channel.js";
import {
  getLoadedChannelPluginById,
  listLoadedChannelPlugins,
} from "../channels/plugins/registry-loaded.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalLowercaseString,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { isNativeCommandTurn, resolveCommandTurnContext } from "./command-turn-context.js";
import { normalizeAnyChannelId } from "../channels/registry.js";
import { normalizeStringEntries } from "../shared/string-normalization.js";

export type CommandAuthorization = {
  providerId?: ChannelId;
  ownerList: string[];
  senderId?: string;
  senderIsOwner: boolean;
  isAuthorizedSender: boolean;
  from?: string;
  to?: string;
};
type InferredProviderCandidate = {
  providerId: ChannelId;
  hadResolutionError: boolean;
};
type InferredProviderProbe = {
  candidates: InferredProviderCandidate[];
  droppedResolutionError: boolean;
};
type OwnerAuthorizationState = {
  allowAll: boolean;
  ownerAllowAll: boolean;
  ownerCandidatesForCommands: string[];
  explicitOwners: string[];
  ownerList: string[];
};
type ProviderAllowFromResolution = {
  allowFrom: Array<string | number>;
  allowFromList: string[];
  hadResolutionError: boolean;
};

export const resolveCommandAuthorization: any = undefined as any;
