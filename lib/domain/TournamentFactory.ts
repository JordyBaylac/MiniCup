import ITournament from './models/ITournament';
import { Injectable } from 'container-ioc';
import { LeagueTournament } from './models/LeagueTournament';
import { PlayoffTournament } from './models/PlayoffTournament';


export const TTournamentFactory = Symbol('ITournamentFactory');

export interface ITournamentFactory {
    createTournament(options): ITournament;
}


@Injectable()
export class TournamentFactory implements ITournamentFactory {

    createTournament(options: any): ITournament {
        let tournament: ITournament;
        if (options.tournamentType == 'regular') {
            tournament = new LeagueTournament();
        }
        else if (options.tournamentType == 'pro') {
            tournament = new PlayoffTournament();
        }
        else
            throw 'unknown tournament type';

        return tournament;
    }

}