import { IConnectionService } from "../../../config/IConnection";
import * as mongoose from "mongoose";
import { Injectable } from "container-ioc";
import * as debug from 'debug';

const log = debug('MongooseConnectionService');
const logError = debug('MongooseConnectionService:error');
log.log = console.log.bind(console);
logError.log = console.error.bind(console);

@Injectable()
export class MongooseConnectionService implements IConnectionService {

    public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    configure() {
        (<any>mongoose).Promise = global.Promise;
        //TODO: read url
        
        mongoose.connect(this.mongoUrl).then((value)=>{
            log('mongoose connected', value);
        })
        .catch((err)=>{
            logError('mongoose error %O', err);
        })
    }

}