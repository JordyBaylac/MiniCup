import { Container } from 'container-ioc';
import { TCupFactory, ICupFactory } from '../domain/ICupFactory';
import { CupFactory } from '../domain/CupFactory';
import { TCupService, ICupService } from '../persistence/ICupService';
import { MongooseCupService } from '../persistence/mongoose/services/CupService';
import { TModelMapper } from '../persistence/IModelMapper';
import { MongooseModelMapper } from '../persistence/mongoose/ModelMapper';
 
let container = new Container();
 
container.register([
    { token: TCupFactory, useClass: CupFactory },
    { token: TCupService, useClass: MongooseCupService },
    { token: TModelMapper, useClass: MongooseModelMapper}
]);

function getCupFactory(): ICupFactory {
    return container.resolve(TCupFactory);
}

function getCupService(): ICupService {
    return container.resolve(TCupService);
}

export const DependencyLocator = {
    Factories: {
        getCupFactory
    },
    Services: {
        getCupService
    },
};
