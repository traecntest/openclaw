// AUTH/MCP STUB - implementation removed

export type JsonRpcRequest = {
  jsonrpc: "2.0";
  id?: JsonRpcId;
  method: string;
  params?: Record<string, unknown>;
};
type JsonRpcId = string | number | null | undefined;

export const MCP_LOOPBACK_SERVER_NAME = "openclaw";
export const MCP_LOOPBACK_SERVER_VERSION = "0.1.0";

export const MCP_LOOPBACK_SUPPORTED_PROTOCOL_VERSIONS: any = undefined as any;
export const jsonRpcError: any = undefined as any;
export const jsonRpcResult: any = undefined as any;
