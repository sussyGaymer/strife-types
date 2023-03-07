import { OpCode } from "../../GatewayConstants";
import { Presence } from "../../user/Presence";
import { OutgoingPayload } from "../Payload";

export interface PresenceUpdatePayload extends OutgoingPayload {
    op: OpCode.PRESENCE_UPDATE;
    d: Presence;
}
