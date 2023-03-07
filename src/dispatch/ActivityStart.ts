import { Activity } from "../user/Presence";

export interface ActivityStartPayload {
    user_id: string;
    activity: Activity;
}
