// AUTH/MCP STUB - implementation removed

import {
  getChannelPlugin,
  listChannelPlugins,
  normalizeChannelId,
} from "../channels/plugins/index.js";
import { GATEWAY_CLIENT_MODES, GATEWAY_CLIENT_NAMES } from "../utils/message-channel.js";
import { applyPluginAutoEnable } from "../config/plugin-auto-enable.js";
import { callGateway } from "../gateway/call.js";
import { commitConfigWithPendingPluginInstalls } from "./plugins-install-record-commit.js";
import { defaultRuntime, type RuntimeEnv } from "../runtime.js";
import { formatCliCommand } from "./command-format.js";
import { formatErrorMessage } from "../infra/errors.js";
import { formatUnsupportedChannelActionMessage } from "./error-format.js";
import { getRuntimeConfig, readConfigFileSnapshot, type OpenClawConfig } from "../config/config.js";
import { isBlockedObjectKey } from "../infra/prototype-keys.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { resolveChannelDefaultAccountId } from "../channels/plugins/helpers.js";
import { resolveInstallableChannelPlugin } from "../commands/channel-setup/channel-plugin-resolution.js";
import { sanitizeForLog } from "../terminal/ansi.js";
import { setVerbose } from "../globals.js";

type ChannelAuthMode = "login" | "logout";
type ChannelAuthOptions = {
  channel?: string;
  account?: string;
  verbose?: boolean;
};
type ChannelPlugin = NonNullable<ReturnType<typeof getChannelPlugin>>;

export const runChannelLogin: any = undefined as any;
export const runChannelLogout: any = undefined as any;
