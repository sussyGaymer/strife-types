export const MINIMUM_RANGE = 100;
export const DEFAULT_RANGES = [[0, MINIMUM_RANGE - 1]] as const;

export interface GuildSubscription {
    typing: boolean;
    threads: boolean;
    activities: boolean;
    members: string[];
    member_updates: boolean;
    channels: {
        [channelId: string]: typeof DEFAULT_RANGES;
    };
    thread_member_lists: boolean;
}
