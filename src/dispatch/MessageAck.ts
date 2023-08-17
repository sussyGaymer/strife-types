export interface MessageAckPayload {
    channel_id: string;
    message_id: string;
    last_viewed: number;
    version: number;
    flags: number | null;
}
