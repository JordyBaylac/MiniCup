import { IParticipant } from "../participants";
import { IStats } from "../stats";

export interface ITournament {
    id: string;

    name: string;

    participants: IParticipant[];

    stats: IStats[];
}
