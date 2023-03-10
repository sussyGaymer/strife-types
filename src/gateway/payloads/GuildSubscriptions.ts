import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

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
