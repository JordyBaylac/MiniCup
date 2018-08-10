import { Container, LifeTime } from 'container-ioc';
import { CupFactory, TCupFactory, ICupFactory } from '../domain/CupFactory';
import { TCupService, ICupService } from '../persistence/ICupService';
import { MongooseCupService } from '../persistence/mongoose/services/CupService';
import { TModelMapper } from '../persistence/IModelMapper';
import { MongooseModelMapper } from '../persistence/mongoose/ModelMapper';
import { TCupController, CupController, ICupController } from '../controllers/CupController';
import { TConnectionService, IConnectionService, DumbConnectionService } from './IConnection';
import { MongooseConnectionService } from '../persistence/mongoose/services/ConnectionService';
import { InMemoryCupService } from '../persistence/in_memory/services/CupService';
import { InMemoryModelMapper } from '../persistence/in_memory/ModelMapper';
 
enum PersistenceMode {InMemory, Mongoose}
let container = new Container();
 
container.register([
    { token: TCupFactory, useClass: CupFactory },
    { token: TCupController, useClass: CupController },
]);

configurePersistence(container, PersistenceMode.InMemory);

function configurePersistence(container: Container, mode: PersistenceMode) : void {
    if (mode == PersistenceMode.InMemory) {
        container.register([
            { token: TCupService, useClass: InMemoryCupService },
            { token: TModelMapper, useClass: InMemoryModelMapper, lifeTime: LifeTime.Persistent},
            { token: TConnectionService, useClass: DumbConnectionService, lifeTime: LifeTime.Persistent},
        ]);
    }
    else if (mode == PersistenceMode.Mongoose) {
        container.register([
            { token: TCupService, useClass: MongooseCupService },
            { token: TModelMapper, useClass: MongooseModelMapper, lifeTime: LifeTime.Persistent},
            { token: TConnectionService, useClass: MongooseConnectionService, lifeTime: LifeTime.Persistent},
        ]);
    } 
    else {
        throw 'cannot configure presistence in unkown mode ' + mode;
    }
}

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
