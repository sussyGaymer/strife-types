import { GuildMember } from "../guild/Member";
import { User } from "../user/User";

export enum MessageType {
    DEFAULT,
    RECIPIENT_ADD,
    RECIPIENT_REMOVE,
    CALL,
    CHANNEL_NAME_CHANGE,
    CHANNEL_ICON_CHANGE,
    CHANNEL_PINNED_MESSAGE,
    USER_JOIN,
    GUILD_BOOST,
    GUILD_BOOST_TIER_1,
    GUILD_BOOST_TIER_2,
    GUILD_BOOST_TIER_3,
    CHANNEL_FOLLOW_ADD,
    GUILD_STREAM,
    GUILD_DISCOVERY_DISQUALIFIED,
    GUILD_DISCOVERY_REQUALIFIED,
    GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
    GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
    THREAD_CREATED,
    REPLY,
    CHAT_INPUT_COMMAND,
    THREAD_STARTER_MESSAGE,
    GUILD_INVITE_REMINDER,
    CONTEXT_MENU_COMMAND,
    AUTO_MODERATION_ACTION,
    ROLE_SUBSCRIPTION_PURCHASE,
    INTERACTION_PREMIUM_UPSELL,
    STAGE_START,
    STAGE_END,
    STAGE_SPEAKER,
    STAGE_RAISE_HAND,
    STAGE_TOPIC,
    GUILD_APPLICATION_PREMIUM_SUBSCRIPTION,
    PRIVATE_CHANNEL_INTEGRATION_ADDED,
    PRIVATE_CHANNEL_INTEGRATION_REMOVED,
    PREMIUM_REFERRAL,
    GUILD_INCIDENT_ALERT_MODE_ENABLED,
    GUILD_INCIDENT_ALERT_MODE_DISABLED,
    GUILD_INCIDENT_REPORT_RAID,
    GUILD_INCIDENT_REPORT_FALSE_ALARM,
}

export interface Message {
    type: MessageType;
    id: string;
    channel_id: string;
    author: User;
    content: string;
    timestamp: string;
    edited_timestamp: string | null;
    tts: boolean;
    mention_everyone: boolean;
    mentions: User[];
    mention_roles: string[];
    mention_channels?: string[];
    attachments: any[]; // TODO: Type
    embeds: any[]; // TODO: Type
    /**
     * Mostly string but the API accepts numbers if you send it
     */
    nonce?: string | number;
    pinned: boolean;
    webhook_id?: string;
    reactions?: any[]; // TODO: Type
    flags?: number;
    referenced_message?: Message | null;
    message_reference?: {
        message_id?: string;
        channel_id?: string;
        guild_id?: string;
    };
    member?: GuildMember;
    components: any[]; // TODO: Type
    guild_id?: string;
    call: {
        ended_timestamp: string | null;
        participants: string[];
    };
    interaction?: any; // TODO: Type
    application_id?: string;
    role_subscription_data?: {
        role_subscription_listing_id: string;
        tier_name: string;
        total_months_subscribed: number;
        is_renewal: boolean;
    };
    application: any; // TODO: Type
}
