import { OpCode } from "../../GatewayConstants";
import { IncomingPayload } from "../Payload";

export interface HelloPayload extends IncomingPayload {
    op: OpCode.HELLO;
    d: {
        heartbeat_interval: number;
        _trace: string[];
    };
}
