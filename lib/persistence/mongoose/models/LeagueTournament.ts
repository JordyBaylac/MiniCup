import * as mongoose from 'mongoose';
import * as validator from 'validator';

export const TournamentSchema = new mongoose.Schema({
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
            return validator.isEmail(value);
        }
    }
});

export const LeagueTournamentModel = mongoose.model('Tournament', TournamentSchema);
