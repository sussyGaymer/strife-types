import { OpCode } from "../../GatewayConstants";
import { OutgoingPayload } from "../Payload";

export interface RequestGuildMembersPayload extends OutgoingPayload {
    op: OpCode.REQUEST_GUILD_MEMBERS;
    d: {
        guild_id: string[];
        query?: string;
        limit?: number;
        user_ids?: string[];
        presences?: boolean;
    };
}
