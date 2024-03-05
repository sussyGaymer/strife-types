import { User } from "@User";

export enum ChannelType {
    GUILD_TEXT,
    DM,
    GUILD_VOICE,
    GROUP_DM,
    GUILD_CATEGORY,
    GUILD_ANNOUNCEMENT,
    GUILD_STORE,
    /**
     * NOTE: This channel type has been removed from the Discord API (GUILD_LFG_LISTINGS)
     */
    _,
    /**
     * NOTE: This channel type has been removed from the Discord API (LFG_GROUP_DM)
     */
    __,
    /**
     * NOTE: This channel type has been removed from the Discord API (THREAD)
     */
    ___,
    ANNOUNCEMENT_THREAD,
    PUBLIC_THREAD,
    PRIVATE_THREAD,
    GUILD_STAGE_VOICE,
    GUILD_DIRECTORY,
    GUILD_FORUM,
    UNKNOWN = 10000,
}

export enum OverwriteType {
    ROLE,
    MEMBER,
}

export enum ForumChannelSortOrder {
    LATEST_ACTIVITY,
    CREATION_DATE,
}

export enum ForumChannelLayoutType {
    NOT_SET,
    LIST_VIEW,
    GALLERY_VIEW,
}

export interface GuildForumChannelTag {
    name: string;
    moderated: boolean;
    id: string;
    emoji_name: string | null;
    emoji_id: string | null;
}

export interface ChannelPermissionOverwrite {
    id: string;
    type: OverwriteType;
    allow: string;
    deny: string;
}

export interface BaseChannel {
    id: string;
    type: ChannelType;
    last_message_id: string | null;
    flags: number;
}

export interface GuildTextChannel extends BaseChannel {
    type: ChannelType.GUILD_TEXT;
    name: string;
    topic: string | null;
    rate_limit_per_user: number;
    position: number;
    permission_overwrites: ChannelPermissionOverwrite[];
    parent_id: string | null;
    nsfw: boolean;
    guild_id: string;
    default_thread_rate_limit_per_user?: number;
    last_pin_timestamp?: string;
}

export interface DMChannel extends BaseChannel {
    type: ChannelType.DM;
    recipients: User[];
    is_spam: boolean;
}

export interface GuildVoiceChannel extends BaseChannel {
    type: ChannelType.GUILD_VOICE;
    name: string;
    rtc_region: string | null;
    position: number;
    user_limit: number;
    rate_limit_per_user: number;
    permission_overwrites: ChannelPermissionOverwrite[];
    bitrate: number;
    parent_id: string | null;
    nsfw?: boolean;
    guild_id: string;
}

export interface GroupDMChannel extends BaseChannel {
    type: ChannelType.GROUP_DM;
    name: string;
    recipients: User[];
    owner_id: string;
    last_pin_timestamp?: string;
    icon: string | null;
}

export interface GuildCategoryChannel extends BaseChannel {
    type: ChannelType.GUILD_CATEGORY;
    name: string;
    position: number;
    permission_overwrites: ChannelPermissionOverwrite[];
    parent_id?: null;
    guild_id: string;
}

export interface GuildAnnouncementChannel extends BaseChannel {
    type: ChannelType.GUILD_ANNOUNCEMENT;
    name: string;
    position: number;
    permission_overwrites: ChannelPermissionOverwrite[];
    topic: string | null;
    nsfw: boolean;
    last_message_id: string | null;
    rate_limit_per_user: number;
    parent_id: string | null;
    last_pin_timestamp?: string;
    guild_id: string;
    default_thread_rate_limit_per_user?: number;
}

/* 6, 10, 11, 12 missing (haven't seen them directly from the API) */

export interface GuildStageChannel extends BaseChannel {
    type: ChannelType.GUILD_STAGE_VOICE;
    name: string;
    rtc_region: string | null;
    position: number;
    user_limit: number;
    rate_limit_per_user: number;
    permission_overwrites: ChannelPermissionOverwrite[];
    bitrate: number;
    parent_id: string | null;
    nsfw?: boolean;
    guild_id: string;
    last_message_id: string | null;
}

/* 14 missing */

export interface GuildForumChannel extends BaseChannel {
    type: ChannelType.GUILD_FORUM;
    name: string;
    position: number;
    permission_overwrites: ChannelPermissionOverwrite[];
    topic: string | null;
    nsfw: boolean;
    last_message_id: string | null;
    rate_limit_per_user: number;
    parent_id: string | null;
    template: string;
    default_thread_rate_limit_per_user: number;
    default_sort_order: ForumChannelSortOrder | null;
    default_reaction_emoji: string | null;
    default_forum_layout: ForumChannelLayoutType;
    default_auto_archive_duration: number;
    available_tags: GuildForumChannelTag[];
    guild_id: string;
}
