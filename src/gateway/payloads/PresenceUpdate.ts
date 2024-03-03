import { OpCode } from "@Gateway/Constants";
import { Presence } from "@User/Presence";
import { OutgoingPayload } from "@Gateway/Payload";

export interface PresenceUpdatePayload extends OutgoingPayload {
    op: OpCode.PRESENCE_UPDATE;
    d: Presence;
}
