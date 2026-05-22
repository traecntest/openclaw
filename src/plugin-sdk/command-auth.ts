// AUTH STUB - implementation removed

import {
  buildCommandsMessage as buildCommandsMessageCompat,
  buildCommandsMessagePaginated as buildCommandsMessagePaginatedCompat,
  buildHelpMessage as buildHelpMessageCompat,
} from "../auto-reply/command-status-builders.js";
import type { ChannelId } from "../channels/plugins/types.public.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  expandAllowFromWithAccessGroups,
  type AccessGroupMembershipResolver,
} from "./access-groups.js";
import { resolveDmGroupAccessWithLists } from "./channel-access-compat.js";

export { buildCommandsPaginationKeyboard } from "./telegram-command-ui.js";
export { getPluginCommandSpecs, listProviderPluginCommandSpecs } from "../plugins/command-specs.js";
export { resolveStoredModelOverride } from "../auto-reply/reply/stored-model-override.js";

export type ResolveSenderCommandAuthorizationParams = {
  cfg: OpenClawConfig;
  rawBody: string;
  isGroup: boolean;
  dmPolicy: string;
  configuredAllowFrom: string[];
  configuredGroupAllowFrom?: string[];
  senderId: string;
  isSenderAllowed: (senderId: string, allowFrom: string[]) => boolean;
  channel?: ChannelId;
  accountId?: string;
  resolveAccessGroupMembership?: AccessGroupMembershipResolver;
  readAllowFromStore: () => Promise<string[]>;
  shouldComputeCommandAuthorized: (rawBody: string, cfg: OpenClawConfig) => boolean;
  /** @deprecated Command authorization is resolved by channel ingress. Kept for runtime injection compatibility. */
  resolveCommandAuthorizedFromAuthorizers?: (params: {
    useAccessGroups: boolean;
    authorizers: Array<{ configured: boolean; allowed: boolean }>;
  }) => boolean;
};

export type CommandAuthorizationRuntime = {
  shouldComputeCommandAuthorized: (rawBody: string, cfg: OpenClawConfig) => boolean;
  resolveCommandAuthorizedFromAuthorizers: (params: {
    useAccessGroups: boolean;
    authorizers: Array<{ configured: boolean; allowed: boolean }>;
  }) => boolean;
};

export type ResolveSenderCommandAuthorizationWithRuntimeParams = Omit<
  ResolveSenderCommandAuthorizationParams,
  "shouldComputeCommandAuthorized" | "resolveCommandAuthorizedFromAuthorizers"
> & {
  runtime: CommandAuthorizationRuntime;
};

export const buildCommandsMessage: any = undefined as any;
export const buildCommandsMessagePaginated: any = undefined as any;
export const buildHelpMessage: any = undefined as any;
export const resolveDirectDmAuthorizationOutcome: any = undefined as any;
export const resolveSenderCommandAuthorization: any = undefined as any;
export const resolveSenderCommandAuthorizationWithRuntime: any = undefined as any;
