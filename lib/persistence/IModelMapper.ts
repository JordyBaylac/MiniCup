
import ICup from "../domain/models/ICup";

export const TModelMapper = Symbol('IModelMapper');

export type DataAccessModel = any;

export interface IModelMapper {
    from(cup: ICup): DataAccessModel;
}

