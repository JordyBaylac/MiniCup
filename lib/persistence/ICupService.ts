import ICup from "../domain/models/ICup";

export const TCupService = Symbol('ICupService');

export interface ICupService {
    addCup(cup: ICup): Promise<boolean>;
    removeCup(cupId: number): Promise<boolean>;
}

