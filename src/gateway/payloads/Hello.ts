import { OpCode } from "@Gateway/Constants";
import { IncomingPayload } from "@Gateway/Payload";

export interface HelloPayload extends IncomingPayload {
    op: OpCode.HELLO;
    d: {
        heartbeat_interval: number;
        _trace: string[];
    };
}
