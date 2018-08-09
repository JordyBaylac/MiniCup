import * as mongoose from 'mongoose';
import * as validator from 'validator';

export const CupSchema = new mongoose.Schema({
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
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    }
});

export const CupModel = mongoose.model('Cup', CupSchema);
