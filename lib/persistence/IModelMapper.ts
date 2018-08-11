
import ITournament from "../domain/models/ITournament";

export const TModelMapper = Symbol('IModelMapper');

export type DataAccessModel = any;

export interface IModelMapper {
    from(tournament: ITournament): DataAccessModel;
}

