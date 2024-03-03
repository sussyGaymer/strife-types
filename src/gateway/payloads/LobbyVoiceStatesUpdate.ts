import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface LobbyVoiceStatesUpdatePayload extends OutgoingPayload {
    op: OpCode.LOBBY_VOICE_STATES_UPDATE;
    d: {
        lobby_id: string;
        self_mute: boolean;
        self_deaf: boolean;
    }[];
}
