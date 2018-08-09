import { IConnectionService } from "../../config/IConnection";
import * as mongoose from "mongoose";

export class MongooseConnectionService implements IConnectionService {

    public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    configure() {
        (<any>mongoose).Promise = global.Promise;
        //TODO: read url
        
        mongoose.connect(this.mongoUrl);
    }

}