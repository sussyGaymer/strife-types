import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface EmbeddedActivityClosePayload extends OutgoingPayload {
    op: OpCode.EMBEDDED_ACTIVITY_CLOSE;
    d: {
        guild_id: string;
        channel_id: string;
        application_id: string;
    };
}
