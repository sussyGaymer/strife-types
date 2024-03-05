import { User } from "@User";

export enum ActivityType {
    PLAYING,
    STREAMING,
    LISTENING,
    WATCHING,
    CUSTOM_STATUS,
    COMPETING,
}

export interface ActivityTimestamp {
    start?: number;
    end?: number;
}

export interface ActivityEmoji {
    name: string;
    id?: string;
    animated?: boolean;
}

export interface ActivityParty {
    id?: string;
    size?: [number, number];
}

export interface ActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
}

export interface ActivitySecrets {
    join?: string;
    spectate?: string;
    match?: string;
}

export interface ActivityButton {
    label: string;
    url: string;
}

export interface Activity {
    name: string;
    type: ActivityType;
    url?: string | null;
    created_at: number;
    timestamps?: ActivityTimestamp;
    application_id?: string;
    details?: string | null;
    state?: string | null;
    emoji?: ActivityEmoji | null;
    party?: ActivityParty;
    assets?: ActivityAssets;
    secrets?: ActivitySecrets;
    instance?: boolean;
    flags?: number;
    buttons?: ActivityButton[];
}

export type PresenceStatus = "online" | "dnd" | "idle" | "offline";
export type PresenceClientStatus = "desktop" | "mobile" | "web";

export interface MergedPresences {
    guilds: {
        status: PresenceStatus;
        client_status: {
            [key in PresenceClientStatus]?: PresenceStatus;
        };
        activities: Activity[];
        user: User;
    }[][];
    friends: {
        status: PresenceStatus;
        last_modified: number;
        client_status: {
            [key in PresenceClientStatus]?: PresenceStatus;
        };
        activities: Activity[];
        user: User;
    }[];
}

export interface Presence {
    activities: Activity[];
    afk: boolean;
    since: number;
    status: PresenceStatus;
}
