// AUTH/MCP STUB - implementation removed

import type { ChannelId } from "../channels/plugins/types.public.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  buildCommandsMessage as buildCommandsMessageCompat,
  buildCommandsMessagePaginated as buildCommandsMessagePaginatedCompat,
  buildHelpMessage as buildHelpMessageCompat,
} from "../auto-reply/command-status-builders.js";
import {
  expandAllowFromWithAccessGroups,
  type AccessGroupMembershipResolver,
} from "./access-groups.js";
import { resolveDmGroupAccessWithLists } from "./channel-access-compat.js";

export type CommandAuthorizationRuntime = {
  shouldComputeCommandAuthorized: (rawBody: string, cfg: OpenClawConfig) => boolean;
  resolveCommandAuthorizedFromAuthorizers: (params: {
    useAccessGroups: boolean;
    authorizers: Array<{ configured: boolean; allowed: boolean }>;
  }) => boolean;
};
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
export type ResolveSenderCommandAuthorizationWithRuntimeParams = Omit<
  ResolveSenderCommandAuthorizationParams,
  "shouldComputeCommandAuthorized" | "resolveCommandAuthorizedFromAuthorizers"
> & {
  runtime: CommandAuthorizationRuntime;
};

export type {
  ChatCommandDefinition,
  CommandArgChoiceContext,
  CommandArgDefinition,
  CommandArgMenuSpec,
  CommandArgValues,
  CommandArgs,
  CommandDetection,
  CommandNormalizeOptions,
  CommandScope,
  NativeCommandSpec,
  ResolvedCommandArgChoice,
  ShouldHandleTextCommandsParams,
} from "../auto-reply/commands-registry.js";
export type { CommandArgsParsing } from "../auto-reply/commands-registry.types.js";
export type { ModelsProviderData } from "../auto-reply/reply/commands-models.js";
export type { SkillCommandSpec } from "../agents/skills.js";
export type { StoredModelOverride } from "../auto-reply/reply/stored-model-override.js";
export {
  ACCESS_GROUP_ALLOW_FROM_PREFIX,
  expandAllowFromWithAccessGroups,
  parseAccessGroupAllowFromEntry,
  resolveAccessGroupAllowFromMatches,
  resolveAccessGroupAllowFromState,
  type AccessGroupMembershipResolver,
  type AccessGroupMembershipLookup,
  type ResolvedAccessGroupAllowFromState,
} from "./access-groups.js";
export {
  buildCommandText,
  buildCommandTextFromArgs,
  findCommandByNativeName,
  formatCommandArgMenuTitle,
  getCommandDetection,
  isCommandEnabled,
  isCommandMessage,
  isNativeCommandSurface,
  listChatCommands,
  listChatCommandsForConfig,
  listNativeCommandSpecs,
  listNativeCommandSpecsForConfig,
  maybeResolveTextAlias,
  normalizeCommandBody,
  parseCommandArgs,
  resolveCommandArgChoices,
  resolveCommandArgMenu,
  resolveTextCommand,
  serializeCommandArgs,
  shouldHandleTextCommands,
} from "../auto-reply/commands-registry.js";
export {
  buildModelsProviderData,
  formatModelsAvailableHeader,
  resolveModelsCommandReply,
} from "../auto-reply/reply/commands-models.js";
export {
  createPreCryptoDirectDmAuthorizer,
  resolveInboundDirectDmAccessWithRuntime,
  type DirectDmCommandAuthorizationRuntime,
  type ResolvedInboundDirectDmAccess,
} from "./direct-dm.js";
export {
  hasControlCommand,
  hasInlineCommandTokens,
  isControlCommandMessage,
  shouldComputeCommandAuthorized,
} from "../auto-reply/command-detection.js";
export {
  listReservedChatSlashCommandNames,
  listSkillCommandsForAgents,
  listSkillCommandsForWorkspace,
  resolveSkillCommandInvocation,
} from "../auto-reply/skill-commands.js";
export {
  resolveCommandAuthorization,
  type CommandAuthorization,
} from "../auto-reply/command-auth.js";
export {
  resolveCommandAuthorizedFromAuthorizers,
  resolveControlCommandGate,
  resolveDualTextControlCommandGate,
  type CommandAuthorizer,
  type CommandGatingModeWhenAccessGroupsOff,
} from "../channels/command-gating.js";
export {
  resolveNativeCommandSessionTargets,
  type ResolveNativeCommandSessionTargetsParams,
} from "../channels/native-command-session-targets.js";
export { buildCommandsPaginationKeyboard } from "./telegram-command-ui.js";
export { getPluginCommandSpecs, listProviderPluginCommandSpecs } from "../plugins/command-specs.js";
export { resolveStoredModelOverride } from "../auto-reply/reply/stored-model-override.js";

export const buildCommandsMessage: any = undefined as any;
export const buildCommandsMessagePaginated: any = undefined as any;
export const buildHelpMessage: any = undefined as any;
export const resolveDirectDmAuthorizationOutcome: any = undefined as any;
export const resolveSenderCommandAuthorization: any = undefined as any;
export const resolveSenderCommandAuthorizationWithRuntime: any = undefined as any;
