// AUTH/MCP STUB - implementation removed

export {
  getSoonestCooldownExpiry,
  isProfileInCooldown,
  resolveProfilesUnavailableReason,
} from "./auth-profiles/usage.js";
export { ensureAuthProfileStore, loadAuthProfileStoreForRuntime } from "./auth-profiles/store.js";
export { resolveAuthProfileOrder } from "./auth-profiles/order.js";

