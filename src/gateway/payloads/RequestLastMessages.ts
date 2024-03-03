import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface RequestLastMessages extends OutgoingPayload {
    op: OpCode.REQUEST_LAST_MESSAGES;
    d: {
        guild_id: string;
        /**
         * WARNING: Type implied
         */
        channel_ids: string[];
    };
}
