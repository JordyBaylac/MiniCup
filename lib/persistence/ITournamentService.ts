import ITournament from "../domain/models/ITournament";

export const TTournamentService = Symbol('ITournamentService');

export interface ITournamentService {
    addTournament(tournament: ITournament): Promise<boolean>;
    removeTournament(tournamentId: number): Promise<boolean>;
}

