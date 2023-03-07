import { NitroTypes } from "./Nitro";
import { Activity } from "./Presence";
import { RelationshipType } from "./Relationship";

/* export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    bot: boolean;
    // wtf?? why is it sometimes camelcase and sometimes snakecase?
    avatar_decoration?: string | null;
    avatarDecoration?: string | null;
    display_name?: string | null;
    displayName?: string | null;
    public_flags?: number;
    publicFlags?: number;
}

export interface SelfUser extends User {
    phone: string | null;
    bio: string;
    mobile: boolean;
    desktop: boolean;
    email: string | null;
    flags: number;
    verified: boolean;
    banner: string | null;
    // say it with me: FUCK. DISCORD.
    nsfw_allowed?: boolean;
    nsfwAllowed?: boolean;
    purchased_flags?: number;
    purchasedFlags?: number;
    premium_type?: NitroTypes;
    premiumType?: NitroTypes;
    mfa_enabled?: boolean;
    mfaEnabled?: boolean;
    accent_color?: number | null;
    accentColor?: number | null;
} */

// TODO: split (selfuser etc)
export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    avatar_decoration?: string | null;
    avatarDecoration?: string | null;
    email?: string | null;
    verified?: boolean;
    bot: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    mfaEnabled?: boolean;
    mobile?: boolean;
    desktop?: boolean;
    premium_type?: NitroTypes;
    premiumType?: NitroTypes;
    flags?: number;
    public_flags?: number;
    publicFlags?: number;
    purchased_flags?: number;
    purchasedFlags?: number;
    premium_usage_flags?: number;
    premiumUsageFlags?: number;
    phone?: string | null;
    nsfw_allowed?: boolean;
    nsfwAllowed?: boolean;
    guild_member_avatars?: string[];
    guildMemberAvatars?: string[];
    has_bounced_email?: boolean;
    hasBouncedEmail?: boolean;
    personal_connection_id?: string | null;
    personalConnectionId?: string | null;
}

export interface UserSession {
    status: string;
    session_id: string;
    client_info: {
        version: number;
        os: string;
        client: string;
    };
    activities: Activity[];
}

export interface UserRelationship {
    type: RelationshipType;
    nickname: string | null;
    id: string;
    user: User;
}
