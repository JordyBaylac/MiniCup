import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

class App {

  public app: express.Application;
  public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  
  private mongoSetup(): void {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
  
}

export default new App().app;