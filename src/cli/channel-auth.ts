// AUTH/MCP STUB - implementation removed

import { resolveChannelDefaultAccountId } from "../channels/plugins/helpers.js";
import {
  getChannelPlugin,
  listChannelPlugins,
  normalizeChannelId,
} from "../channels/plugins/index.js";
import { resolveInstallableChannelPlugin } from "../commands/channel-setup/channel-plugin-resolution.js";
import { getRuntimeConfig, readConfigFileSnapshot, type OpenClawConfig } from "../config/config.js";
import { applyPluginAutoEnable } from "../config/plugin-auto-enable.js";
import { callGateway } from "../gateway/call.js";
import { setVerbose } from "../globals.js";
import { formatErrorMessage } from "../infra/errors.js";
import { isBlockedObjectKey } from "../infra/prototype-keys.js";
import { defaultRuntime, type RuntimeEnv } from "../runtime.js";
import { normalizeOptionalString } from "../shared/string-coerce.js";
import { sanitizeForLog } from "../terminal/ansi.js";
import { GATEWAY_CLIENT_MODES, GATEWAY_CLIENT_NAMES } from "../utils/message-channel.js";
import { formatCliCommand } from "./command-format.js";
import { formatUnsupportedChannelActionMessage } from "./error-format.js";
import { commitConfigWithPendingPluginInstalls } from "./plugins-install-record-commit.js";

type ChannelAuthOptions = {
  channel?: string;
  account?: string;
  verbose?: boolean;
};
type ChannelPlugin = NonNullable<ReturnType<typeof getChannelPlugin>>;
type ChannelAuthMode = "login" | "logout";

export const runChannelLogin: any = undefined as any;
export const runChannelLogout: any = undefined as any;
