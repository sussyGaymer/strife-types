import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface RemoteCommandPayload extends OutgoingPayload {
    op: OpCode.REMOTE_COMMAND;
    d: {
        type: string;
        [params: string]: any;
    };
}
