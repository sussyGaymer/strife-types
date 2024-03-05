import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";
import { GuildSubscription } from "@Guild/Subscriptions";

export default interface GuildSubscriptionsBulkPayload extends OutgoingPayload {
    op: OpCode.GUILD_SUBSCRIPTIONS_BULK;
    d: {
        subscriptions: {
            [guildId: string]: Partial<GuildSubscription>;
        };
    };
}
