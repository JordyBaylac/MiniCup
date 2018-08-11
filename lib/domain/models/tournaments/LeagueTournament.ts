import { IParticipant } from "../participants";
import { ITournament } from "./ITournament";

export class LeagueTournament implements ITournament {
    
    
    id: string;
    name: string;
    participants: IParticipant[];

}
