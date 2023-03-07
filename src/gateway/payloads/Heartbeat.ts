import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface HeartbeatPayload extends OutgoingPayload {
    op: OpCode.HEARTBEAT;
    d: number;
}
