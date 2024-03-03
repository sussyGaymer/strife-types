import { OpCode } from "@Gateway/Constants";
import { VoiceState } from "@Voice/VoiceState";
import { OutgoingPayload } from "@Gateway/Payload";

export interface VoiceStateUpdatePayload extends OutgoingPayload {
    op: OpCode.VOICE_STATE_UPDATE;
    d: VoiceState; // TODO: preferred_region and tracks
}
