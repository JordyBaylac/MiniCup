import { IParticipant } from "./IParticipant";
import { Player } from "./Player";

export class Team implements IParticipant {
    public id: string;    
    public name: string;

    public owner: Player;
    public players: Player[];
}
