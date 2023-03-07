/**
 * Tags with type null represent booleans. They will be present and set to null if they are "true", and will be not present if they are "false".
 */
export interface RoleTags {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: null;
    subscription_listing_id?: string;
    available_for_purchase?: null;
    guild_connections?: null;
}

export interface Role {
    unicode_emoji: string | null;
    tags: RoleTags;
    position: number;
    permissions: string;
    name: string;
    mentionable: boolean;
    managed: boolean;
    id: string;
    icon: string | null;
    hoist: boolean;
    flags: number;
    color: number;
}
