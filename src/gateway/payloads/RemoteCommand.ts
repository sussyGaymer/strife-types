import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface RemoteCommandPayload extends OutgoingPayload {
    op: OpCode.REMOTE_COMMAND;
    d: {
        type: string;
        [params: string]: any;
    };
}
