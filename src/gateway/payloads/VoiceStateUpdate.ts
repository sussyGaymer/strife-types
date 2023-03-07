import { OpCode } from "../../GatewayConstants";
import { VoiceState } from "../../voice/VoiceState";
import { OutgoingPayload } from "../Payload";

export interface VoiceStateUpdatePayload extends OutgoingPayload {
    op: OpCode.VOICE_STATE_UPDATE;
    d: VoiceState; // TODO: preferred_region and tracks
}
