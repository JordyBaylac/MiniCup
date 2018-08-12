import { Container, LifeTime } from 'container-ioc';
import { 
    ITournamentController, 
    TournamentController, 
    TTournamentController } from '../controllers/TournamentController';
import { ITournamentFactory, TournamentFactory, TTournamentFactory } from '../domain/TournamentFactory';
import { TModelMapper } from '../persistence/IModelMapper';
import { InMemoryModelMapper } from '../persistence/in_memory/ModelMapper';
import { InMemoryTournamentService } from '../persistence/in_memory/services/TournamentService';
import { ITournamentService, TTournamentService } from '../persistence/ITournamentService';
import { MongooseModelMapper } from '../persistence/mongoose/ModelMapper';
import { MongooseConnectionService } from '../persistence/mongoose/services/ConnectionService';
import { MongooseTournamentService } from '../persistence/mongoose/services/TournamentService';
import { DumbConnectionService, IConnectionService, TConnectionService } from './IConnection';

enum PersistenceMode { InMemory, Mongoose }
const container = new Container();

container.register([
    { token: TTournamentFactory, useClass: TournamentFactory },
    { token: TTournamentController, useClass: TournamentController },
]);

configurePersistence(PersistenceMode.InMemory);

function configurePersistence(mode: PersistenceMode): void {
    if (mode === PersistenceMode.InMemory) {
        container.register([
            { token: TTournamentService, useClass: InMemoryTournamentService },
            { token: TModelMapper, useClass: InMemoryModelMapper, lifeTime: LifeTime.Persistent },
            { token: TConnectionService, useClass: DumbConnectionService, lifeTime: LifeTime.Persistent },
        ]);
    } else if (mode === PersistenceMode.Mongoose) {
        container.register([
            { token: TTournamentService, useClass: MongooseTournamentService },
            { token: TModelMapper, useClass: MongooseModelMapper, lifeTime: LifeTime.Persistent },
            { token: TConnectionService, useClass: MongooseConnectionService, lifeTime: LifeTime.Persistent },
        ]);
    } else {
        throw new Error('cannot configure presistence in unkown mode ' + mode);
    }
}

export const DependencyLocator = {
    Controllers: {
        getTournamentController: (): ITournamentController => container.resolve(TTournamentController),
    },
    Factories: {
        getTournamentFactory: (): ITournamentFactory => container.resolve(TTournamentFactory),
    },
    Services: {
        getConnectionService: (): IConnectionService => container.resolve(TConnectionService),
        getTournamentService: (): ITournamentService => container.resolve(TTournamentService),        
    },    
};
