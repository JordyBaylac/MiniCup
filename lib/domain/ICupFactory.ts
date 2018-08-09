import ICup from "../domain/models/ICup";

export const TCupFactory = Symbol('ICupFactory');

export interface ICupFactory {
    createCup(options): ICup;
}

