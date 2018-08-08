import { Injectable, Inject } from 'container-ioc';
import { TCupService, ICupService } from '../../../interfaces/ICupService';
import { Cup } from '../../../domain/Cup';
 
@Injectable()
export class MongooseCupService implements ICupService {
    createCup(cup: Cup): boolean {
        throw new Error("Method not implemented.");
    }
    // constructor(@Inject(TCupService) private service: ICupService) {}
    
    // run(): void {
    //     this.service.serve();
    // }
}