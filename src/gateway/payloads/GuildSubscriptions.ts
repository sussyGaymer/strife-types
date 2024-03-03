import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface GuildSubscriptionsPayload extends OutgoingPayload {
    op: OpCode.GUILD_SUBSCRIPTIONS;
    d: {
        // TODO: some might be optional
        guild_id: string;
        typing: boolean;
        activities: boolean;
        threads: boolean;
        channels: {
            [channelId: string]: [number, number][];
        };
    };
}
