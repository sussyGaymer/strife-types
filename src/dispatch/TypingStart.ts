import { GuildMember } from "../guild/Member";

export interface TypingStartPayload {
    user_id: string;
    channel_id: string;
    guild_id?: string;
    member?: GuildMember;
}
