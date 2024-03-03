import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface SearchRecentMembersPayload extends OutgoingPayload {
    op: OpCode.SEARCH_RECENT_MEMBERS;
    d: {
        guild_id: string;
        query: string;
        /**
         * WARNING: String type implied
         */
        continuation_token: string | null;
    };
}
