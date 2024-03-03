import { DMChannel, GroupDMChannel } from "@Channel";
import { GuildMember } from "@Guild/Member";
import { VoiceState } from "@Voice/VoiceState";
import { MergedPresences } from "@User/Presence";

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
