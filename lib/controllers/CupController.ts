
import { CupModel } from '../models/CupModel';
import { Request, Response } from 'express';


export class CupController{

    public addNewCup (req: Request, res: Response) {   

        let newCup = new CupModel(req.body);
        newCup
        newCup.save()
            .then((cup)=> res.json(cup))
            .catch((err)=> res.send(err));

        // newCup.save((err, cup) => {
        //     if(err){
        //         res.send(err);
        //     }    
        //     res.json(cup);
        // });
    }

    public getCups (req: Request, res: Response) {           
        Cup.find({}, (err, cup) => {
            if(err){
                res.send(err);
            }
            res.json(cup);
        });
    }

    public getCupWithID (req: Request, res: Response) {           
        Cup.findById(req.params.cupId, (err, cup) => {
            if(err){
                res.send(err);
            }
            res.json(cup);
        });
    }

    public updateCup (req: Request, res: Response) {           
        Cup.findOneAndUpdate({ _id: req.params.cupId }, req.body, { new: true }, (err, cup) => {
            if(err){
                res.send(err);
            }
            res.json(cup);
        });
    }

    public deleteCup (req: Request, res: Response) {           
        Cup.remove({ _id: req.params.cupId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Cup!'});
        });
    }
    
}