import { Container, LifeTime } from 'container-ioc';
import { TCupFactory, ICupFactory } from '../domain/ICupFactory';
import { CupFactory } from '../domain/CupFactory';
import { TCupService, ICupService } from '../persistence/ICupService';
import { MongooseCupService } from '../persistence/mongoose/services/CupService';
import { TModelMapper } from '../persistence/IModelMapper';
import { MongooseModelMapper } from '../persistence/mongoose/ModelMapper';
import { TCupController, CupController, ICupController } from '../controllers/CupController';
import { TConnectionService, IConnectionService } from './IConnection';
import { MongooseConnectionService } from '../persistence/mongoose/ConnectionService';
 
let container = new Container();
 
container.register([
    { token: TCupFactory, useClass: CupFactory },
    { token: TCupService, useClass: MongooseCupService },
    { token: TModelMapper, useClass: MongooseModelMapper, lifeTime: LifeTime.Persistent},
    { token: TCupController, useClass: CupController },
    { token: TConnectionService, useClass: MongooseConnectionService, lifeTime: LifeTime.Persistent},
]);

export const DependencyLocator = {
    Factories: {
        getCupFactory: (): ICupFactory => container.resolve(TCupFactory),
    },
    Services: {
        getCupService: (): ICupService => container.resolve(TCupService),
        getConnectionService: (): IConnectionService => container.resolve(TConnectionService),
    },
    Controllers: {
        getCupController: (): ICupController => container.resolve(TCupController),
    },
};
