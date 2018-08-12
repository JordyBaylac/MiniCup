import { Injectable } from 'container-ioc';
import { Document } from 'mongoose';
import { LeagueTournament, PlayoffTournament } from '../../domain/models/tournaments';
import { IModelMapper } from '../IModelMapper';
import { LeagueTournamentModel } from './models/LeagueTournament';

@Injectable()
export class MongooseModelMapper implements IModelMapper {

    // public from(tournament: LeagueTournament): Document;
    // public from(tournament: PlayoffTournament): Document;

    public from(tournament: LeagueTournament | PlayoffTournament): Document {
        if (tournament instanceof LeagueTournament) {
            return new LeagueTournamentModel({ myMongooseId: tournament.id });
        }
        if (tournament instanceof PlayoffTournament) {
            return new LeagueTournamentModel({ myMongooseId: tournament.id, proInfo: tournament });
        }
        throw new Error("mongoose mapper didn't found a match for tournamen provided");
    }

}
