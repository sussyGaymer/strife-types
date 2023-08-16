import { OpCode, ActionTypes } from "../../GatewayConstants";
import { IncomingPayload } from "../Payload";

export interface DispatchPayload extends IncomingPayload {
    op: OpCode.DISPATCH;
    s: number;
    t: (typeof ActionTypes)[number];
    d: unknown;
}
