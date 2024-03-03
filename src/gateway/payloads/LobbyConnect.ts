import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface LobbyConnectPayload extends OutgoingPayload {
    op: OpCode.LOBBY_CONNECT;
    d: {
        lobby_id: string;
        lobby_secret: string;
    };
}
