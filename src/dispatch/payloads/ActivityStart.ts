import { Activity } from "@User/Presence";

export interface ActivityStartPayload {
    user_id: string;
    activity: Activity;
}
