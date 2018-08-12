import { IParticipant } from "../participants";
import { ITournament } from "./ITournament";

export class PlayoffTournament implements ITournament {
    public id: string;
    public name: string;
    public participants: IParticipant[];
}
