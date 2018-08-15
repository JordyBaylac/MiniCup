import { IParticipant } from "../participants";
import { ISeason } from "./ISeason";

export interface ITournament {
    id: string;
    name: string;
    seasons: ISeason[];
}
