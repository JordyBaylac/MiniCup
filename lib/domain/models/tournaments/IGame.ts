import { IParticipant } from "../participants";

export interface IGame {
    
    // tuple of the two participants of the game
    participants: [IParticipant, IParticipant];

}
