import { ICupFactory } from "./ICupFactory";
import ICup from "./models/ICup";
import { Injectable } from "../../node_modules/container-ioc";

@Injectable()
export class CupFactory implements ICupFactory {

    createCup(options: any): ICup{
        throw new Error("Method not implemented.");
    }

}