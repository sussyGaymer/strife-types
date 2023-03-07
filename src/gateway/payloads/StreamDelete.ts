import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface StreamDeletePayload extends OutgoingPayload {
    op: OpCode.STREAM_DELETE;
    d: {
        stream_key: string;
    };
}
