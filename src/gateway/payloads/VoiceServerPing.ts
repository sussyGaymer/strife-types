import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface VoiceServerPingPayload extends OutgoingPayload {
    op: OpCode.VOICE_SERVER_PING;
    d: null;
}
