import { OpCode, DispatchEvents } from "../../GatewayConstants";
import { IncomingPayload } from "../Payload";

export interface DispatchPayload extends IncomingPayload {
    op: OpCode.DISPATCH;
    s: number;
    t: (typeof DispatchEvents)[number];
    d: unknown;
}
