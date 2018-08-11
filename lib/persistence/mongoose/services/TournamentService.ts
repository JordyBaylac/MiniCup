import {Injectable, Inject} from 'container-ioc';
import {ITournamentService} from '../../ITournamentService';
import ITournament from '../../../domain/models/ITournament';
import {MongooseModelMapper} from '../ModelMapper';
import { TModelMapper } from '../../IModelMapper';
import * as debug from 'debug';

const log = debug('MongooseTournamentService');

@Injectable()
export class MongooseTournamentService implements ITournamentService {

    constructor(@Inject(TModelMapper)protected mapper : MongooseModelMapper) {}

    async addTournament(tournament : ITournament) : Promise <boolean> {
        try {
            let tournamentDto = this.mapper.from(tournament);
            let document = await tournamentDto.save();
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