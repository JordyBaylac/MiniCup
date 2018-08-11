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
        let cup: ITournament;
        if (options.cupType == 'regular') {
            cup = new LeagueTournament();
        }
        else if (options.cupType == 'pro') {
            cup = new PlayoffTournament();
        }
        else
            throw 'unknown cup type';

        return cup;
    }

}