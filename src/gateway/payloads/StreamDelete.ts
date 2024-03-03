import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface StreamDeletePayload extends OutgoingPayload {
    op: OpCode.STREAM_DELETE;
    d: {
        stream_key: string;
    };
}
