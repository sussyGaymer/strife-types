export enum UserConnectionVisibility {
    HIDDEN,
    VISIBLE,
}

export enum UserConnectionMetadataVisibility {
    HIDDEN,
    VISIBLE,
}

export interface UserConnection {
    visibility: UserConnectionVisibility;
    verified: boolean;
    type: string;
    two_way_link: boolean;
    show_activity: boolean;
    revoked: boolean;
    name: string;
    metadata_visibility: UserConnectionMetadataVisibility;
    id: string;
    friend_sync: boolean;
    access_token?: string;
}
