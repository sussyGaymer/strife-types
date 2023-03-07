import { OpCode } from "../../GatewayConstants";
import { IncomingPayload } from "../Payload";

export interface HeartbeatAckPayload extends IncomingPayload {
    op: OpCode.HEARTBEAT_ACK;
    d: null;
}
