import { IParticipant } from "../participants";
import { ITournament } from "./ITournament";

export class PlayoffTournament implements ITournament {
    id: string;
    name: string;
    participants: IParticipant[];
}
