import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface ResumePayload extends OutgoingPayload {
    op: OpCode.RESUME;
    d: {
        token: string;
        session_id: string;
        seq: number;
    };
}
