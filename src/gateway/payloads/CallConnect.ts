import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface CallConnectPayload extends OutgoingPayload {
    op: OpCode.CALL_CONNECT;
    d: {
        channel_id: string;
    };
}
