import ICup from "./models/ICup";
import { Injectable } from "../../node_modules/container-ioc";

export const TCupFactory = Symbol('ICupFactory');

export interface ICupFactory {
    createCup(options): ICup;
}


@Injectable()
export class CupFactory implements ICupFactory {

    createCup(options: any): ICup{
        throw new Error("Method not implemented.");
    }

}