import { OpCode, ActionTypes } from "@Gateway/Constants";
import { IncomingPayload } from "@Gateway/Payload";

export interface DispatchPayload extends IncomingPayload {
    op: OpCode.DISPATCH;
    s: number;
    t: (typeof ActionTypes)[number];
    d: unknown;
}
