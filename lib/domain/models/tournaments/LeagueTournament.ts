
import { ITournament } from "./ITournament";
import { IRound } from "./rounds";
import { ISeason } from "./ISeason";

/**
 * All participants face each others.
 */
export class LeagueTournament implements ITournament {
    
    public id: string;
    public name: string;
    public seasons: ISeason[];

    // public games: IGameStats[];
    public rounds: IRound[];

}
