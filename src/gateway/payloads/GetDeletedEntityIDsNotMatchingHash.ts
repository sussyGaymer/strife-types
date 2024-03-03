import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface GetDeletedEntityIDsNotMatchingHashPayload extends OutgoingPayload {
    op: OpCode.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH;
    d: {
        // TODO: Verify types
        guild_id: string;
        channel_ids_hash: string;
        role_ids_hash: string;
        emoji_ids_hash: string;
        sticker_ids_hash: string;
    };
}
