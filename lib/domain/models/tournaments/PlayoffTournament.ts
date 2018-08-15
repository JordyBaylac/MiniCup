
import { ITournament } from "./ITournament";
import { ISeason } from "./ISeason";

export class PlayoffTournament implements ITournament {
    
    public id: string;
    public name: string;
    public seasons: ISeason[];

}
