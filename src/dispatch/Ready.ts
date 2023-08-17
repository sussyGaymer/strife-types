import { CountryCodes } from "../user/Locale";
import { DMChannel, GroupDMChannel } from "../channel/Channel";
import { Guild } from "../guild/Guild";
import { GuildMember } from "../guild/Member";
import { GuildSetting } from "../guild/Settings";
import { User, UserSession, UserRelationship } from "../user/User";
import { UserConnection } from "../user/Connections";

export interface ReadyPayload {
    v: number;
    users: User[];
    user_settings_proto: string;
    user_guild_settings: GuildSetting[];
    user: User;
    tutorial: null; // TODO: Figure out the structure
    sessions: UserSession[];
    session_type: "normal"; // TODO: figure out what else than "normal" it can be
    session_id: string;
    relationships: UserRelationship[];
    read_state: any[]; // TODO: implement this or don't
    private_channels: (DMChannel | GroupDMChannel)[];
    merged_members: GuildMember[][];
    guilds: Guild[];
    guild_join_requests: any[]; // TODO: Figure out the structure
    guild_experiments: any[]; // TODO: implement this or don't
    geo_ordered_rtc_regions: string[];
    friend_suggestion_count: number;
    experiments: any[]; // TODO: implement this or don't
    country_code: (typeof CountryCodes)[number];
    consents: {
        // TODO: find out more
        [key: string]: {
            consented: boolean;
        };
    };
    connected_accounts: UserConnection[];
    auth_session_id_hash: string;
    api_code_version: number;
    analytics_token: string;
    _trace: string[];
}
