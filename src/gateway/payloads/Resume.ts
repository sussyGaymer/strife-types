import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface ResumePayload extends OutgoingPayload {
    op: OpCode.RESUME;
    d: {
        token: string;
        session_id: string;
        seq: number;
    };
}
