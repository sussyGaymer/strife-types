import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface StreamCreatePayload extends OutgoingPayload {
    op: OpCode.STREAM_CREATE;
    d:
        | {
              type: "guild";
              guild_id: string;
              channel_id: string;
              preferred_region: string | null;
          }
        | {
              type: "call";
              guild_id: null;
              channel_id: string;
              preferred_region: string | null;
          };
}
