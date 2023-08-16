import { ActionTypes, OpCode } from "../GatewayConstants";

export interface IncomingPayload {
    op: OpCode;
    s: number | null;
    t: (typeof ActionTypes)[number] | null;
    d: unknown | null;
}

export interface OutgoingPayload {
    op: OpCode;
    s: null;
    t: null;
    d: unknown;
}
