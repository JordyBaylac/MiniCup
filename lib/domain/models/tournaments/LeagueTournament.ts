
import { ITournament } from "./ITournament";
import { ISeason } from "./ISeason";

/**
 * All participants face each others.
 */
export class LeagueTournament implements ITournament {
    
    public id: string;
    public name: string;
    public seasons: ISeason[];

}
