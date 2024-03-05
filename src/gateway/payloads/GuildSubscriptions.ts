import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";
import { GuildSubscription } from "@Guild/Subscriptions";

export interface GuildSubscriptionsPayload extends OutgoingPayload {
    op: OpCode.GUILD_SUBSCRIPTIONS;
    d: Partial<GuildSubscription> & { guild_id: string };
}
