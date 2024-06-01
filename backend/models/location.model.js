import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
