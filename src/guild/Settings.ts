export enum GuildMessageNotifications {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1,
    NO_MESSAGES = 2,
    NULL = 3,
}

export enum GuildMFALevel {
    NONE = 0,
    ELEVATED = 1,
}

export enum GuildVerificationLevel {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4,
}

export enum GuildExplicitContentFilterLevel {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLES = 1,
    ALL_MEMBERS = 2,
}

export interface GuildChannelOverride {
    muted: boolean;
    mute_config: null; //TODO: Figure out what this is
    message_notifications: GuildMessageNotifications;
    collapsed: boolean;
    channel_id: string;
}

export interface GuildSettingEntry {
    version: number;
    suppress_roles: boolean;
    suppress_everyone: boolean;
    notify_highlights: number;
    muted: boolean;
    mute_scheduled_events: boolean;
    mute_config: null; // TODO: idk it was always null for me, needs research
    mobile_push: boolean;
    message_notifications: GuildMessageNotifications;
    hide_muted_channels: boolean;
    guild_id: string;
    flags: number;
    channel_overrides: GuildChannelOverride[];
}

export interface GuildSetting {
    version: number;
    partial: boolean;
    entries: GuildSettingEntry[];
}
