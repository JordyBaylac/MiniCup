import { IParticipant } from "../participants";
import { ITournament } from "./ITournament";
import { IStats } from "../stats";

/**
 * All participants face each others.
 */
export class LeagueTournament implements ITournament {
    
    public id: string;
    public name: string;
    public participants: IParticipant[];
    public stats: IStats[];

    // public games: IGameStats[];

}
