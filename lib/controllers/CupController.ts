import RegularCup from '../domain/models/Cup';
import {Request, Response} from 'express';
import {TCupService, ICupService} from '../persistence/ICupService';
import {Inject} from 'container-ioc';
import {TCupFactory, ICupFactory} from '../domain/ICupFactory';
import * as HttpStatus from 'http-status-codes';

export class CupController {

    constructor(@Inject(TCupFactory)private factory : ICupFactory, @Inject(TCupService)private service : ICupService,) {}

    protected throwNotImplementedRequest(res: Response) {
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
                if(isOk) {
                    res
                        .status(HttpStatus.CREATED)
                        .send('ok');
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
        // RegularCup.find({}, (err, cup) => {     if (err) {         res.send(err);
        // }     res.json(cup); });
    }

    public getCupByID(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.findById(req.params.cupId, (err, cup) => {     if (err) {
        // res.send(err);     }     res.json(cup); });
    }

    public updateCup(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.findOneAndUpdate({     _id: req.params.cupId }, req.body, {
        // new: true }, (err, cup) => {     if (err) {         res.send(err);     }
        // res.json(cup); });
    }

    public deleteCup(req : Request, res : Response) {
        this.throwNotImplementedRequest(res);
        // RegularCup.remove({     _id: req.params.cupId }, (err) => {     if (err) {
        //      res.send(err);     }     res.json({message: 'Successfully deleted
        // Cup!'}); });
    }

}