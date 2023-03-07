import { DMChannel, GroupDMChannel } from "../channel/Channel";
import { GuildMember } from "../guild/Member";
import { VoiceState } from "../voice/VoiceState";
import { MergedPresences } from "../user/Presence";

export interface ReadySupplementalPayload {
    merged_presences: MergedPresences;
    merged_members: GuildMember[][];
    lazy_private_channels: (DMChannel | GroupDMChannel)[];
    guilds: {
        id: string;
        voice_states: VoiceState[];
        embedded_activities: any[]; // TODO: Find and add type
    }[];
}
