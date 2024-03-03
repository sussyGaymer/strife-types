import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface CallConnectPayload extends OutgoingPayload {
    op: OpCode.CALL_CONNECT;
    d: {
        channel_id: string;
    };
}
