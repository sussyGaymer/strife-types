import { OpCode } from "@Gateway/Constants";
import { OutgoingPayload } from "@Gateway/Payload";

export interface SpeedTestCreatePayload extends OutgoingPayload {
    op: OpCode.SPEED_TEST_CREATE;
    d: {
        // TODO: Find out more about RTC regions and how they differ
        // from regular regions. (see RegionStore and RTCRegionStore)
        preferred_region: string | null;
    };
}
