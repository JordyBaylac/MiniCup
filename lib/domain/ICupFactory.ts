import ICup from "./models/ICup";

export const TCupFactory = Symbol('ICupFactory');

export interface ICupFactory {
    createCup(options): ICup;
}

