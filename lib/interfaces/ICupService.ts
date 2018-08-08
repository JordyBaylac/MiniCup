import { Cup } from "../domain/Cup";

export const TCupService = Symbol('ICupService');

export interface ICupService {
    createCup(cup: Cup): boolean;
}

