import {Injectable, Inject} from 'container-ioc';
import {ICupService} from '../../ICupService';
import ICup from '../../../domain/models/ICup';
import {MongooseModelMapper} from '../ModelMapper';
import { TModelMapper } from '../../IModelMapper';
import * as debug from 'debug';

const log = debug('MongooseCupService');

@Injectable()
export class MongooseCupService implements ICupService {

    constructor(@Inject(TModelMapper)protected mapper : MongooseModelMapper) {}

    async addCup(cup : ICup) : Promise <boolean> {
        try {
            let cupDto = this.mapper.from(cup);
            let document = await cupDto.save();
            return true;
        } catch (e) {
            log('there was an error %o', e);
            return false;
        }
    }
    
    removeCup(cupId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}