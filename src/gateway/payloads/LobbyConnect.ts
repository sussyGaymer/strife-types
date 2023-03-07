import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface LobbyConnectPayload extends OutgoingPayload {
    op: OpCode.LOBBY_CONNECT;
    d: {
        lobby_id: string;
        lobby_secret: string;
    };
}
