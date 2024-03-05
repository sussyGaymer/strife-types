import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface RemoteCommandPayload extends OutgoingPayload {
    op: OpCode.REMOTE_COMMAND;
    d: {
        target_session_id: string;
        payload: {
            [params: string]: any;
        };
    };
}
