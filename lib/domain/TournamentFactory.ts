
import { Injectable } from 'container-ioc';
import { ITournament, LeagueTournament, PlayoffTournament } from './models/tournaments';


export const TTournamentFactory = Symbol('ITournamentFactory');

export interface ITournamentFactory {
    createTournament(options): ITournament;
}


@Injectable()
export class TournamentFactory implements ITournamentFactory {

    public createTournament(options: any): ITournament {
        let tournament: ITournament;
        if (options.type === 'league') {
            tournament = new LeagueTournament(options);
        } else if (options.tournamentType === 'playoff') {
            tournament = new PlayoffTournament(options);
        } else {
            throw new Error('unknown tournament type');
        }

        return tournament;
    }

}
