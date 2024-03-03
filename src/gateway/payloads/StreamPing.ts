import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface StreamPingPayload extends OutgoingPayload {
    op: OpCode.STREAM_PING;
    d: {
        stream_key: string;
    };
}
