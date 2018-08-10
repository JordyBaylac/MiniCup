import ICup from "./models/ICup";
import { Injectable } from "../../node_modules/container-ioc";
import RegularCup from "./models/RegularCup";
import ProfessionalCup from "./models/ProfessionalCup";

export const TCupFactory = Symbol('ICupFactory');

export interface ICupFactory {
    createCup(options): ICup;
}


@Injectable()
export class CupFactory implements ICupFactory {

    createCup(options: any): ICup{

        let cup: ICup;
        if(options.cupType == 'regular'){
            cup = new RegularCup();
        } 
        else if(options.cupType == 'pro'){
            cup = new ProfessionalCup();
        }

        return cup;

    }

}