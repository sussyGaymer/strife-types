import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface StreamSetPausedPayload extends OutgoingPayload {
    op: OpCode.STREAM_SET_PAUSED;
    d: {
        stream_key: string;
        paused: boolean;
    };
}
