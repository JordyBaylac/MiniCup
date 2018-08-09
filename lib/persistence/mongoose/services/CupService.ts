import {Injectable, Inject} from 'container-ioc';
import {ICupService} from '../../ICupService';
import ICup from '../../../domain/models/ICup';
import {MongooseModelMapper} from '../ModelMapper';
import { IModelMapper, TModelMapper } from '../../IModelMapper';
import * as debug from 'debug';

const log = debug('MongooseCupService');

@Injectable()
export class MongooseCupService implements ICupService {

    // protected mapper : MongooseModelMapper;

    // constructor() {
    //     this.mapper = new MongooseModelMapper();
    // }

    constructor(@Inject(TModelMapper)protected mapper : MongooseModelMapper) {}


    async addCup(cup : ICup) : Promise <boolean> {

        let cupDto = this.mapper.from(cup);

        try {
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