import { OpCode } from "../../GatewayConstants";
import { IncomingPayload } from "../Payload";

export interface ReconnectPayload extends IncomingPayload {
    op: OpCode.RECONNECT;
    d: null;
}
