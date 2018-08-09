import { ICupFactory } from "./ICupFactory";
import ICup from "./models/ICup";

export class CupFactory implements ICupFactory {

    createCup(options: any): ICup{
        throw new Error("Method not implemented.");
    }

}