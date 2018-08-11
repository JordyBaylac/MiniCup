import { Inject, Injectable } from 'container-ioc';
import * as debug from 'debug';
import { ITournament } from '../../../domain/models/tournaments';
import { TModelMapper } from '../../IModelMapper';
import { ITournamentService } from '../../ITournamentService';
import { MongooseModelMapper } from '../ModelMapper';

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