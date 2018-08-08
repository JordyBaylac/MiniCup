import { Request, Response, NextFunction } from "express";
import { CupController } from "../controllers/CupController";

export class Routes {

    public cupController: CupController = new CupController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // Cup 
        app.route('/cup')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                    res.status(401).send('You shall not pass!');
                } else {
                    next();
                }
            }, this.cupController.getCups)

            // POST endpoint
            .post(this.cupController.addNewCup);

        // Cup detail
        app.route('/cup/:cupId')
            .get(this.cupController.getCupWithID)
            .put(this.cupController.updateCup)
            .delete(this.cupController.deleteCup);

    }
}