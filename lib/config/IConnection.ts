import { Injectable } from "container-ioc";
import * as debug from 'debug';


export const TConnectionService = Symbol('IConnectionService');

export interface IConnectionService {
    configure();
}

const log = debug('DumbConnectionService');
log.log = console.log.bind(console);

@Injectable()
export class DumbConnectionService implements IConnectionService {

    public configure() {
        log('not connection required');
    }

}
