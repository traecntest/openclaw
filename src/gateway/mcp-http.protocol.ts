// AUTH/MCP STUB - implementation removed

type JsonRpcId = string | number | null | undefined;
export type JsonRpcRequest = {
  jsonrpc: "2.0";
  id?: JsonRpcId;
  method: string;
  params?: Record<string, unknown>;
};

export const MCP_LOOPBACK_SERVER_NAME: any = undefined as any;
export const MCP_LOOPBACK_SERVER_VERSION: any = undefined as any;
export const MCP_LOOPBACK_SUPPORTED_PROTOCOL_VERSIONS: any = undefined as any;
export const jsonRpcError: any = undefined as any;
export const jsonRpcResult: any = undefined as any;
