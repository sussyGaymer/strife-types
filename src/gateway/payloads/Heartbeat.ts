import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface HeartbeatPayload extends OutgoingPayload {
    op: OpCode.HEARTBEAT;
    d: number;
}
