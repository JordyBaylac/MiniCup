import {Injectable, Inject} from 'container-ioc';
import {ICupService} from '../../ICupService';
import ICup from '../../../domain/models/ICup';
import {MongooseModelMapper} from '../ModelMapper';

@Injectable()
export class MongooseCupService implements ICupService {

    protected mapper : MongooseModelMapper;

    constructor() {
        this.mapper = new MongooseModelMapper();
    }

    async addCup(cup : ICup) : Promise <boolean> {

        let cupDto = this.mapper.from(cup);

        try {
            let document = await cupDto.save();
            return true;
        } catch (e) {
            console.error('there was an error', e);
            return false;
        }

    }
    
    removeCup(cupId: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}