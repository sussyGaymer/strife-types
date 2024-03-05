export enum GuildMessageNotifications {
    ALL_MESSAGES,
    ONLY_MENTIONS,
    NO_MESSAGES,
    NULL,
}

export enum GuildMFALevel {
    NONE,
    ELEVATED,
}

export enum GuildVerificationLevel {
    NONE,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
}

export enum GuildExplicitContentFilterLevel {
    DISABLED,
    MEMBERS_WITHOUT_ROLES,
    ALL_MEMBERS,
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
