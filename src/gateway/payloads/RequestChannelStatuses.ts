import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface RequestChannelStatuses extends OutgoingPayload {
    op: OpCode.REQUEST_CHANNEL_STATUSES;
    d: {
        guild_id: string;
    };
}
