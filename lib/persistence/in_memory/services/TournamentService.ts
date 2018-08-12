
import { Inject, Injectable } from 'container-ioc';
import * as debug from 'debug';
import { ITournament } from '../../../domain/models/tournaments';
import { TModelMapper } from '../../IModelMapper';
import { ITournamentService } from '../../ITournamentService';
import { InMemoryModelMapper } from '../ModelMapper';
import { InMemoryTournamentModel } from '../models/Models';

const log = debug('InMemoryTournamentService');

@Injectable()
export class InMemoryTournamentService implements ITournamentService {

    private tournamentlist: InMemoryTournamentModel[] = [];

    constructor(@Inject(TModelMapper) protected mapper: InMemoryModelMapper) { }

    public async addTournament(tournament: ITournament): Promise<boolean> {
        try {
            const tournamentDto = this.mapper.from(tournament);
            this.tournamentlist.push(tournamentDto);
            log('tournament added %o', tournamentDto);
            return true;
        } catch (e) {
            log('there was an error %o', e);
            return false;
        }
    }

    public removeTournament(tournamentId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}
