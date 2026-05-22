// AUTH/MCP STUB - implementation removed

export type {
  ApiKeyCredential,
  AuthProfileBlockedReason,
  AuthProfileBlockedSource,
  AuthProfileCredential,
  AuthProfileFailureReason,
  AuthProfileIdRepairResult,
  AuthProfileState,
  AuthProfileStore,
  OAuthCredential,
  ProfileUsageStats,
  TokenCredential,
} from "./auth-profiles/types.js";
export type {
  AuthCredentialReasonCode,
  TokenExpiryState,
} from "./auth-profiles/credential-state.js";
export type { AuthProfileEligibilityReasonCode } from "./auth-profiles/order.js";
export {
  buildPortableAuthProfileSecretsStoreForAgentCopy,
  isAuthProfileCredentialPortableForAgentCopy,
  resolveAuthProfilePortability,
  type AuthProfilePortability,
  type AuthProfilePortabilityReason,
} from "./auth-profiles/portability.js";
export {
  calculateAuthProfileCooldownMs,
  clearAuthProfileCooldown,
  clearExpiredCooldowns,
  getSoonestCooldownExpiry,
  isProfileInCooldown,
  markAuthProfileCooldown,
  markAuthProfileBlockedUntil,
  markAuthProfileFailure,
  resolveProfilesUnavailableReason,
  resolveProfileUnusableUntilForDisplay,
} from "./auth-profiles/usage.js";
export {
  clearRuntimeAuthProfileStoreSnapshots,
  ensureAuthProfileStore,
  ensureAuthProfileStoreWithoutExternalProfiles,
  hasAnyAuthProfileStoreSource,
  loadAuthProfileStoreForSecretsRuntime,
  loadAuthProfileStoreWithoutExternalProfiles,
  loadAuthProfileStoreForRuntime,
  replaceRuntimeAuthProfileStoreSnapshots,
  loadAuthProfileStore,
  saveAuthProfileStore,
  findPersistedAuthProfileCredential,
  resolvePersistedAuthProfileOwnerAgentDir,
} from "./auth-profiles/store.js";
export {
  dedupeProfileIds,
  listProfilesForProvider,
  markAuthProfileSuccess,
  removeProviderAuthProfilesWithLock,
  setAuthProfileOrder,
  upsertAuthProfile,
  upsertAuthProfileWithLock,
} from "./auth-profiles/profiles.js";
export {
  externalCliDiscoveryExisting,
  externalCliDiscoveryForConfigStatus,
  externalCliDiscoveryForProviderAuth,
  externalCliDiscoveryForProviders,
  externalCliDiscoveryNone,
  externalCliDiscoveryScoped,
  type ExternalCliAuthDiscovery,
} from "./auth-profiles/external-cli-discovery.js";
export {
  isConfiguredAwsSdkAuthProfileForProvider,
  resolveAuthProfileEligibility,
  resolveAuthProfileOrder,
} from "./auth-profiles/order.js";
export {
  refreshOAuthCredentialForRuntime,
  resolveApiKeyForProfile,
} from "./auth-profiles/oauth.js";
export {
  repairOAuthProfileIdMismatch,
  suggestOAuthProfileIdForLegacyDefault,
} from "./auth-profiles/repair.js";
export {
  resolveAuthStatePathForDisplay,
  resolveAuthStorePathForDisplay,
} from "./auth-profiles/paths.js";
export { CLAUDE_CLI_PROFILE_ID, CODEX_CLI_PROFILE_ID } from "./auth-profiles/constants.js";
export { formatAuthDoctorHint } from "./auth-profiles/doctor.js";
export { resolveAuthProfileDisplayLabel } from "./auth-profiles/display.js";

