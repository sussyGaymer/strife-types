import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface StreamWatchPayload extends OutgoingPayload {
    op: OpCode.STREAM_WATCH;
    d: {
        stream_key: string;
    };
}
