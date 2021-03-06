
import { Injectable } from 'container-ioc';
import { ITournament, LeagueTournament, PlayoffTournament } from './models/tournaments';


export const TTournamentFactory = Symbol('ITournamentFactory');

export interface ITournamentFactory {
    createTournament(options: ICreateTournamentOptions): ITournament;
}

export enum TournamentType { league = 'league', playoff = 'playoff' }

export interface ICreateTournamentOptions {
    type: TournamentType;
}


@Injectable()
export class TournamentFactory implements ITournamentFactory {

    public createTournament(options: ICreateTournamentOptions): ITournament {
        let tournament: ITournament;
        if (options.type === TournamentType.league) {
            tournament = new LeagueTournament();
        } else if (options.type === TournamentType.playoff) {
            tournament = new PlayoffTournament();
        } else {
            throw new Error('unknown tournament type');
        }

        return tournament;
    }

}
