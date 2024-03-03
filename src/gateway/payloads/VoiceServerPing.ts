import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface VoiceServerPingPayload extends OutgoingPayload {
    op: OpCode.VOICE_SERVER_PING;
    d: null;
}
