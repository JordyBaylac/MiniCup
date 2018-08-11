import { Injectable } from 'container-ioc';
import { LeagueTournament, PlayoffTournament } from '../../domain/models/tournaments';
import { IModelMapper } from '../IModelMapper';
import { InMemoryTournamentModel } from './models/Models';

@Injectable()
export class InMemoryModelMapper implements IModelMapper {

    from(tournament: LeagueTournament): InMemoryTournamentModel;
    from(tournament: PlayoffTournament): InMemoryTournamentModel;

    from(tournament: LeagueTournament | PlayoffTournament): InMemoryTournamentModel {
        if (tournament instanceof LeagueTournament)
            return new InMemoryTournamentModel();
        if (tournament instanceof PlayoffTournament)
            return new InMemoryTournamentModel();
        throw "in memory mapper didn't found a match for tournament provided";
    }

}