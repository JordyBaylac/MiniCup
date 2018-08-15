
import { IParticipant } from "../participants";
import { IRound } from "./rounds";

export interface ISeason {
    id: string;
    name: string;
    participants: IParticipant[];
    rounds: IRound[];
}
