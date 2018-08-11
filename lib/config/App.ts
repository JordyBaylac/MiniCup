import * as bodyParser from "body-parser";
import * as express from "express";
import * as helmet from "helmet";
import { DependencyLocator } from "./DependencyLocator";
import { IConnectionService } from "./IConnection";
import { Routes } from "./Routes";

class App {

  public app: express.Application;
  public routes: Routes;
  public connection: IConnectionService;

  constructor() {
    this.app = express();
    this.routes = new Routes(DependencyLocator.Controllers.getTournamentController());
    this.connection = DependencyLocator.Services.getConnectionService();
    
    this.config();
  }

  private config(): void {
    this.app.use(helmet());
    // support application/json type post data
    this.app.use(bodyParser.json({limit: '50kb'}));

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.routes.configure(this.app);
    this.connection.configure();
  }
  
}

export default new App().app;