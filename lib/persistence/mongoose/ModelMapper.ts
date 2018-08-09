import {Injectable} from 'container-ioc';
import {IModelMapper} from '../IModelMapper';
import RegularCup from '../../domain/models/Cup';
import {CupModel} from './models/CupModel';
import { Document } from 'mongoose';


@Injectable()
export class MongooseModelMapper implements IModelMapper {
    from(cup : RegularCup) : Document {
        return new CupModel({myMongooseId: cup.id});
    }
}