import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface RequestForumUnreadsPayload extends OutgoingPayload {
    op: OpCode.REQUEST_FORUM_UNREADS;
    d: {
        guild_id: string;
        channel_id: string;
        threads: {
            thread_id: string;
            ack_message_id: string;
        }[];
    };
}
