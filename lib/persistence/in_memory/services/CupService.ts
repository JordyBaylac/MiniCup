
import {Injectable, Inject} from 'container-ioc';
import {ICupService} from '../../ICupService';
import ICup from '../../../domain/models/ICup';
import {InMemoryModelMapper} from '../ModelMapper';
import { TModelMapper } from '../../IModelMapper';
import * as debug from 'debug';
import { InMemoryCupModel } from '../models/Models';

const log = debug('InMemoryCupService');

@Injectable()
export class InMemoryCupService implements ICupService {

    private _cuplist: InMemoryCupModel[] = [];

    constructor(@Inject(TModelMapper)protected mapper : InMemoryModelMapper) {}

    async addCup(cup : ICup) : Promise <boolean> {
        try {
            let cupDto = this.mapper.from(cup);
            this._cuplist.push(cupDto);
            log('cup added %o', cupDto);
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