import { OpCode } from "@Gateway/Constants";
import { IncomingPayload } from "@Gateway/Payload";

export interface ReconnectPayload extends IncomingPayload {
    op: OpCode.RECONNECT;
    d: null;
}
