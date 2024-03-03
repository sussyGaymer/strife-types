import { NitroTypes } from "@User/Nitro";
import { Activity } from "@User/Presence";
import { RelationshipType } from "@User/Relationship";

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
    accent_color?: number | null;
    accentColor?: number | null;
    bio: string;
    global_name?: string | null;
    globalName?: string | null;
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
