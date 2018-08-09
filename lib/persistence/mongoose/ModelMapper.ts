import {Injectable} from 'container-ioc';
import {IModelMapper, DataAccessModel} from '../IModelMapper';
import RegularCup from '../../domain/models/Cup';
import {CupModel} from './models/CupModel';

@Injectable()
export class MongooseModelMapper implements IModelMapper {
    from(cup : RegularCup) : DataAccessModel {
        return new CupModel({myMongooseId: cup.id});
    }
}