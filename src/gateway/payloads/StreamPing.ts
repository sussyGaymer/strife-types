import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface StreamPingPayload extends OutgoingPayload {
    op: OpCode.STREAM_PING;
    d: {
        stream_key: string;
    };
}
