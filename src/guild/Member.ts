import { User } from "@User";

export interface GuildMember {
    roles: string[];
    premium_since: string | null;
    pending: boolean;
    nick: string | null;
    mute: boolean;
    joined_at: string;
    flags: number;
    deaf: boolean;
    communication_disabled_until: string | null;
    avatar: string | null;
    user: User;
}
