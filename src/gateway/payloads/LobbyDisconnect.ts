import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface LobbyDisconnectPayload extends OutgoingPayload {
    op: OpCode.LOBBY_DISCONNECT;
    d: {
        lobby_id: string;
    };
}
