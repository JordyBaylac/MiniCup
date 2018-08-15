
import { IParticipant } from "../participants";

export interface ISeason {
    id: string;
    name: string;
    participants: IParticipant[];
}
