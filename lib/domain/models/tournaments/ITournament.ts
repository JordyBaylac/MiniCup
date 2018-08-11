import { IParticipant } from "../participants";

export interface ITournament {
    id: string;

    name: string;

    participants: IParticipant[]
}