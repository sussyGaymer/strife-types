import { GuildFeatures, GuildNSFWLevel, GuildPremiumTier } from "@Guild/Properties";
import { GuildExplicitContentFilterLevel, GuildMessageNotifications, GuildMFALevel, GuildVerificationLevel } from "@Guild/Settings";
import { SlashCommandType } from "@Interactions/Commands";
import { LocaleCodes } from "@User/Locale";
import { GuildAnnouncementChannel, GuildCategoryChannel, GuildForumChannel, GuildStageChannel, GuildTextChannel, GuildVoiceChannel } from "@Channel";
import { Emoji } from "@Guild/Emoji";
import { Sticker } from "@Guild/Media";
import { GuildMember } from "@Guild/Member";
import { Role } from "@Guild/Role";

export interface GuildProperties {
    default_message_notifications: GuildMessageNotifications;
    rules_channel_id: string | null;
    safety_alerts_channel_id: string | null;
    vanity_url_code: string | null;
    verification_level: GuildVerificationLevel;
    description: string | null;
    system_channel_flags: number;
    discovery_splash: string | null;
    splash: string | null;
    home_header: string | null;
    hub_type: string | null;
    preferred_locale: (typeof LocaleCodes)[number];
    mfa_level: GuildMFALevel;
    max_stage_video_channel_users: number;
    max_video_channel_users: number;
    banner: string | null;
    owner_id: string;
    features: (typeof GuildFeatures)[number][];
    latest_onboarding_question_id: string | null;
    id: string;
    premium_tier: GuildPremiumTier;
    afk_timeout: number;
    application_id: string | null;
    public_updates_channel_id: string | null;
    explicit_content_filter: GuildExplicitContentFilterLevel;
    system_channel_id: string | null;
    nsfw: boolean;
    icon: string | null;
    max_members: number;
    afk_channel_id: string | null;
    premium_progress_bar_enabled: boolean;
    name: string;
    nsfw_level: GuildNSFWLevel;
}

export interface Guild {
    version: number;
    threads: any[]; // TODO: type
    stickers: Sticker[];
    stage_instances: any[]; // TODO: type
    roles: Role[];
    properties: GuildProperties;
    premium_subscription_count: number;
    member_count: number;
    lazy: boolean;
    large: boolean;
    joined_at: string;
    id: string;
    guild_scheduled_events: any[]; // TODO: type
    emojis: Emoji[];
    data_mode: "full" | "partial";
    channels: (GuildTextChannel | GuildVoiceChannel | GuildCategoryChannel | GuildAnnouncementChannel | GuildStageChannel | GuildForumChannel)[];
    application_command_counts: {
        [SlashCommandType.CHAT_INPUT]?: number;
        [SlashCommandType.USER]?: number;
        [SlashCommandType.MESSAGE]?: number;
    };
    members: GuildMember[];
}
