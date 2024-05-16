import { Timestamp } from "firebase/firestore";

export class Blog {
    id?: string;
    title?: string;
    description?: string;
    date?: Timestamp;
}
