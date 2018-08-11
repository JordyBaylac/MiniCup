
import {Request, Response} from 'express';
import {TTournamentService, ITournamentService} from '../persistence/ITournamentService';
import {Inject, Injectable} from 'container-ioc';
import {TTournamentFactory, ITournamentFactory} from '../domain/TournamentFactory';
import * as HttpStatus from 'http-status-codes';

export const TTournamentController = Symbol('ITournamentController');

export interface ITournamentController {
    addNewTournament(req : Request, res : Response);
    getTournaments(req : Request, res : Response);
    getTournamentByID(req : Request, res : Response);
    updateTournament(req : Request, res : Response);
    deleteTournament(req : Request, res : Response);
}

@Injectable()
export class TournamentController implements ITournamentController {

    constructor(@Inject(TTournamentFactory)private factory : ITournamentFactory, @Inject(TTournamentService)private service : ITournamentService,) {}

    protected throwNotImplementedRequest(res : Response) {
        res
            .status(HttpStatus.NOT_IMPLEMENTED)
            .send({
                error: HttpStatus.getStatusText(HttpStatus.NOT_IMPLEMENTED)
            });
    }

    public addNewTournament(req : Request, res : Response) {

        let tournament = this
            .factory
            .createTournament(req.body);

        this
            .service
            .addTournament(tournament)
            .then((isOk) => {
                if (isOk) {
                    res
                        .status(HttpStatus.CREATED)
                        .send('ok');
                } else {
                    res
                        .status(HttpStatus.METHOD_FAILURE)
                        .send({
                            error: HttpStatus.getStatusText(HttpStatus.METHOD_FAILURE)
                        });
                }
            })
            .catch((err) => {
                res
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .send({
                        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
                    });
            });

    }

    public getTournaments(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularTournament.find({}, (err, tournament) => {     if (err) {         res.send(err); }
        //   res.json(tournament); });
    }

    public getTournamentByID(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularTournament.findById(req.params.tournamentId, (err, tournament) => {     if (err) {
        // res.send(err);     }     res.json(tournament); });
    }

    public updateTournament(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularTournament.findOneAndUpdate({     _id: req.params.tournamentId }, req.body, { new:
        // true, runValidators: true }, (err, tournament) => {     if (err) {         res.send(err);     }
        // res.json(tournament); });
    }

    public deleteTournament(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularTournament.remove({     _id: req.params.tournamentId }, (err) => {     if (err) {
        //   res.send(err);     }     res.json({message: 'Successfully deleted Tournament!'});
        // });
    }

}