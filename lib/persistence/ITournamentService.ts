import { ITournament } from "../domain/models/tournaments";

export const TTournamentService = Symbol('ITournamentService');

export interface ITournamentService {
    addTournament(tournament: ITournament): Promise<boolean>;
    removeTournament(tournamentId: number): Promise<boolean>;
}

