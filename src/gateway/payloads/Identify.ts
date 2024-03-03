import { OpCode } from "@Gateway/Constants";
import { LocaleCodes } from "@User/Locale";
import { Presence } from "@User/Presence";
import { OutgoingPayload } from "@Gateway/Payload";

export interface IdentifyPayload extends OutgoingPayload {
    op: OpCode.IDENTIFY;
    d: {
        token: string;
        capabilities?: number;
        properties?: Partial<{
            os: string;
            browser: string;
            device: string;
            system_locale: (typeof LocaleCodes)[number];
            browser_user_agent: string;
            browser_version: string;
            os_version: string;
            referrer: string;
            referring_domain: string;
            referrer_current: string;
            referring_domain_current: string;
            release_channel: string;
            client_build_number: number;
            client_event_source: null | "OVERLAY";
            design_id: number;
        }>;
        presence?: Presence;
        compress?: boolean;
        client_state?: Partial<{
            guild_versions: {
                [guildId: string]: number;
            };
            highest_last_message_id: string;
            read_state_version: number;
            user_guild_settings_version: number;
            user_settings_version: number;
            private_channels_version: string;
            api_code_version: number;
        }>;
    };
}
