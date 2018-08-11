import {Request, Response, NextFunction, Application} from "express";
import {TournamentController, ITournamentController, TTournamentController} from "../controllers/TournamentController";
import {DependencyLocator} from "./DependencyLocator";
import { Inject } from "container-ioc";
import * as HttpStatus from 'http-status-codes';

export class Routes {

    constructor(@Inject(TTournamentController) private tournamentController  : ITournamentController,) {}

    
    public configure(app: Application) : void {

        app
            .route('/')
            .get((req : Request, res : Response) => {
                res
                    .status(200)
                    .send({message: 'GET request successfulll!!!!'})
            })

            // Tournament
            app
            .route('/tournament')
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
            }, this.tournamentController.getTournaments.bind(this.tournamentController))

            // POST endpoint
            .post(this.tournamentController.addNewTournament.bind(this.tournamentController));

        // Tournament detail
        app
            .route('/tournament/:tournamentId')
            .get(this.tournamentController.getTournamentByID.bind(this.tournamentController))
            .put(this.tournamentController.updateTournament.bind(this.tournamentController))
            .delete(this.tournamentController.deleteTournament.bind(this.tournamentController));

    }
}