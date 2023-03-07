import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface StreamWatchPayload extends OutgoingPayload {
    op: OpCode.STREAM_WATCH;
    d: {
        stream_key: string;
    };
}
