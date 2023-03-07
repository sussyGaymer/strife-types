import { User } from "../user/User";

export interface ActivityUserActionPayload {
    action_type: string; // TODO: verify type
    user: User;
    application_id: string;
    channel_id: string;
    message_id: string;
}
