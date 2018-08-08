import * as mongoose from 'mongoose';

const CupSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'Cup id is required'
    },
    name: {
        type: String,
        required: 'Enter a first name'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const CupModel = mongoose.model('Cup', CupSchema);

export { CupModel, CupSchema };