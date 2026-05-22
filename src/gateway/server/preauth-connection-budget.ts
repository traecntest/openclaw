// AUTH/MCP STUB - implementation removed

export type PreauthConnectionBudget = {
  acquire(clientIp: string | undefined): boolean;
  release(clientIp: string | undefined): void;
};

export const createPreauthConnectionBudget: any = undefined as any;
