import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

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
