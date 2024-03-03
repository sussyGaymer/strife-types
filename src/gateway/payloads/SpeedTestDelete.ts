import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface SpeedTestCreatePayload extends OutgoingPayload {
    op: OpCode.SPEED_TEST_DELETE;
    d: null;
}
