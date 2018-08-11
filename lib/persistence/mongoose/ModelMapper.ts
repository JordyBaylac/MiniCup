import { Injectable } from 'container-ioc';
import { Document } from 'mongoose';
import { LeagueTournament } from '../../domain/models/LeagueTournament';
import { PlayoffTournament } from '../../domain/models/PlayoffTournament';
import { IModelMapper } from '../IModelMapper';
import { LeagueTournamentModel } from './models/LeagueTournament';

@Injectable()
export class MongooseModelMapper implements IModelMapper {

    from(tournament: LeagueTournament): Document;
    from(tournament: PlayoffTournament): Document;

    from(tournament: LeagueTournament | PlayoffTournament): Document {
        if (tournament instanceof LeagueTournament)
            return new LeagueTournamentModel({ myMongooseId: tournament.id });
        if (tournament instanceof PlayoffTournament)
            return new LeagueTournamentModel({ myMongooseId: tournament.id, proInfo: tournament });
        throw "mongoose mapper didn't found a match for tournamen provided";
    }

}