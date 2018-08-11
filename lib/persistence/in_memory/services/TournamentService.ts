
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

    private _tournamentlist: InMemoryTournamentModel[] = [];

    constructor(@Inject(TModelMapper)protected mapper : InMemoryModelMapper) {}

    async addTournament(tournament : ITournament) : Promise <boolean> {
        try {
            let tournamentDto = this.mapper.from(tournament);
            this._tournamentlist.push(tournamentDto);
            log('tournament added %o', tournamentDto);
            return true;
        } catch (e) {
            log('there was an error %o', e);
            return false;
        }
    }
    
    removeTournament(tournamentId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}