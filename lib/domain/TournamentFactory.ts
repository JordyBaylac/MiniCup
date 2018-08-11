
import { Injectable } from 'container-ioc';
import { ITournament, LeagueTournament, PlayoffTournament } from './models/tournaments';


export const TTournamentFactory = Symbol('ITournamentFactory');

export interface ITournamentFactory {
    createTournament(options): ITournament;
}


@Injectable()
export class TournamentFactory implements ITournamentFactory {

    createTournament(options: any): ITournament {
        let tournament: ITournament;
        if (options.type == 'regular') {
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