import { IParticipant } from "../participants";
import { ITournament } from "./ITournament";

export class LeagueTournament implements ITournament {
    
    
    public id: string;
    public name: string;
    public participants: IParticipant[];

}
