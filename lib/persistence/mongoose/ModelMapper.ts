import {Injectable} from 'container-ioc';
import {IModelMapper} from '../IModelMapper';
import RegularCup from '../../domain/models/RegularCup';
import {CupModel} from './models/CupModel';
import {Document} from 'mongoose';
import ProfessionalCup from '../../domain/models/ProfessionalCup';

@Injectable()
export class MongooseModelMapper implements IModelMapper {

    from(cup : RegularCup) : Document;
    from(cup : ProfessionalCup) : Document;

    from(cup : RegularCup | ProfessionalCup) : Document {
        if(cup instanceof RegularCup) 
            return new CupModel({myMongooseId: cup.id});
        if (cup instanceof ProfessionalCup) 
            return new CupModel({myMongooseId: cup.id, proInfo: cup.likes});
        throw "mongoose mapper didn't found a match for cup provided";
    }

}