import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface StreamSetPausedPayload extends OutgoingPayload {
    op: OpCode.STREAM_SET_PAUSED;
    d: {
        stream_key: string;
        paused: boolean;
    };
}
