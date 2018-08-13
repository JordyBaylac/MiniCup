import { IParticipant } from "./IParticipant";
import { ITournament } from "../tournaments";

export class Player implements IParticipant {
    public id: string;    
    public name: string;

    public tournaments: ITournament[];
}
