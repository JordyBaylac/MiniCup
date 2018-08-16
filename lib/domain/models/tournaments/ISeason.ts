
import { IParticipant } from "../participants";
import { IRound } from "./IRound";

export interface ISeason {
    id: string;
    name: string;
    participants: IParticipant[];
    rounds: IRound[];
}
