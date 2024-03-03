import { OpCode } from "@Gateway/Constants";
import { IncomingPayload } from "@Gateway/Payload";

export interface InvalidSessionPayload extends IncomingPayload {
    op: OpCode.INVALID_SESSION;
    d: boolean;
}
