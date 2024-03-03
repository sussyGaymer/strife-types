import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export default interface RequestSoundboardSoundsPayload extends OutgoingPayload {
    op: OpCode.REQUEST_SOUNDBOARD_SOUNDS;
    d: {
        guild_ids: string[];
    };
}
