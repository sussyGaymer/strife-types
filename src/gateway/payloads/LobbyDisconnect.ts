import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface LobbyDisconnectPayload extends OutgoingPayload {
    op: OpCode.LOBBY_DISCONNECT;
    d: {
        lobby_id: string;
    };
}
