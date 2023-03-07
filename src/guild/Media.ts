export enum StickerFormat {
    PNG = 1,
    APNG = 2,
    LOTTIE = 3,
    GIF = 4,
}

export enum StickerType {
    STANDARD = 1,
    GUILD = 2,
}

export interface Sticker {
    type: StickerType;
    tags: string;
    name: string;
    id: string;
    guild_id: string;
    format_type: StickerFormat;
    description: string;
    available: boolean;
    asset: string;
}
