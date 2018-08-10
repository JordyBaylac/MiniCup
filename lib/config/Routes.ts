import {Request, Response, NextFunction, Application} from "express";
import {CupController, ICupController, TCupController} from "../controllers/CupController";
import {DependencyLocator} from "./DependencyLocator";
import { Inject } from "container-ioc";
import * as HttpStatus from 'http-status-codes';

export class Routes {

    constructor(@Inject(TCupController) private cupController  : ICupController,) {}

    
    public configure(app: Application) : void {

        app
            .route('/')
            .get((req : Request, res : Response) => {
                res
                    .status(200)
                    .send({message: 'GET request successfulll!!!!'})
            })

            // Cup
            app
            .route('/cup')
            .get((req : Request, res : Response, next : NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                    res
                        .status(HttpStatus.UNAUTHORIZED)
                        .send('You shall not pass!');
                } else {
                    next();
                }
            }, this.cupController.getCups.bind(this.cupController))

            // POST endpoint
            .post(this.cupController.addNewCup.bind(this.cupController));

        // Cup detail
        app
            .route('/cup/:cupId')
            .get(this.cupController.getCupByID.bind(this.cupController))
            .put(this.cupController.updateCup.bind(this.cupController))
            .delete(this.cupController.deleteCup.bind(this.cupController));

    }
}