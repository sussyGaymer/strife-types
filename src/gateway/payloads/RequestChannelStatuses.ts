import { OpCode } from "../Constants";
import { OutgoingPayload } from "../Payload";

export interface RequestChannelStatuses extends OutgoingPayload {
    op: OpCode.REQUEST_CHANNEL_STATUSES;
    d: {
        guild_id: string;
    };
}
