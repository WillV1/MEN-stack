const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    equipment: String,
    reps: {
        type: Number,
        min: 5
    },    
    sets: {
        type: Number,
        min: 1
    },    
    weight: Number,
    completed: Boolean 
});

module.exports = mongoose.model('Exercise', exerciseSchema);