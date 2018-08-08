import * as mongoose from 'mongoose';

class Cup {
    id: String;
}

const CupSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String            
    },
    company: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const CupModel = mongoose.model('Cup', CupSchema);

export { Cup, CupModel, CupSchema };