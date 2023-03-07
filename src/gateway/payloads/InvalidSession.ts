import { OpCode } from "../../GatewayConstants";
import { IncomingPayload } from "../Payload";

export interface InvalidSessionPayload extends IncomingPayload {
    op: OpCode.INVALID_SESSION;
    d: boolean;
}
