import {Injectable} from 'container-ioc';
import {IModelMapper} from '../IModelMapper';
import RegularCup from '../../domain/models/RegularCup';
import ProfessionalCup from '../../domain/models/ProfessionalCup';
import {InMemoryCupModel} from './models/Models';

@Injectable()
export class InMemoryModelMapper implements IModelMapper {

    from(cup : RegularCup) : InMemoryCupModel;
    from(cup : ProfessionalCup) : InMemoryCupModel;

    from(cup : RegularCup | ProfessionalCup) : InMemoryCupModel {
        if(cup instanceof RegularCup) 
            return new InMemoryCupModel();
        if (cup instanceof ProfessionalCup) 
            return new InMemoryCupModel();
        throw "in memory mapper didn't found a match for cup provided";
    }

}