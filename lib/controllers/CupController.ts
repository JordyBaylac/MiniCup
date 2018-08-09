
import {Request, Response} from 'express';
import {TCupService, ICupService} from '../persistence/ICupService';
import {Inject, Injectable} from 'container-ioc';
import {TCupFactory, ICupFactory} from '../domain/CupFactory';
import * as HttpStatus from 'http-status-codes';

export const TCupController = Symbol('ICupController');

export interface ICupController {
    addNewCup(req : Request, res : Response);
    getCups(req : Request, res : Response);
    getCupByID(req : Request, res : Response);
    updateCup(req : Request, res : Response);
    deleteCup(req : Request, res : Response);
}

@Injectable()
export class CupController implements ICupController {

    constructor(@Inject(TCupFactory)private factory : ICupFactory, @Inject(TCupService)private service : ICupService,) {}

    protected throwNotImplementedRequest(res : Response) {
        res
            .status(HttpStatus.NOT_IMPLEMENTED)
            .send({
                error: HttpStatus.getStatusText(HttpStatus.NOT_IMPLEMENTED)
            });
    }

    public addNewCup(req : Request, res : Response) {

        let cup = this
            .factory
            .createCup(req.body);

        this
            .service
            .addCup(cup)
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

    public getCups(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.find({}, (err, cup) => {     if (err) {         res.send(err); }
        //   res.json(cup); });
    }

    public getCupByID(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.findById(req.params.cupId, (err, cup) => {     if (err) {
        // res.send(err);     }     res.json(cup); });
    }

    public updateCup(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.findOneAndUpdate({     _id: req.params.cupId }, req.body, { new:
        // true, runValidators: true }, (err, cup) => {     if (err) {         res.send(err);     }
        // res.json(cup); });
    }

    public deleteCup(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.remove({     _id: req.params.cupId }, (err) => {     if (err) {
        //   res.send(err);     }     res.json({message: 'Successfully deleted Cup!'});
        // });
    }

}