
import {Injectable, Inject} from 'container-ioc';
import {ITournamentService} from '../../ITournamentService';
import ITournament from '../../../domain/models/ITournament';
import {InMemoryModelMapper} from '../ModelMapper';
import { TModelMapper } from '../../IModelMapper';
import * as debug from 'debug';
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