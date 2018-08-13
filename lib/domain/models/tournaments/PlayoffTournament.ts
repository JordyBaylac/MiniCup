import { IParticipant } from "../participants";
import { ITournament } from "./ITournament";
import { IStats } from "../stats";

export class PlayoffTournament implements ITournament {
    
    public id: string;
    public name: string;
    public participants: IParticipant[];
    public stats: IStats[];

}
