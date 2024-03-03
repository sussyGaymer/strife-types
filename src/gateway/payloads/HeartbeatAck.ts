import { OpCode } from "@Gateway/Constants";
import { IncomingPayload } from "@Gateway/Payload";

export interface HeartbeatAckPayload extends IncomingPayload {
    op: OpCode.HEARTBEAT_ACK;
    d: null;
}
