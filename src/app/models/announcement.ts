import { Timestamp } from "firebase/firestore";

export class Announcement {
    id?: string;
    title?: string;
    description?: string;
    date?: Timestamp;
}
