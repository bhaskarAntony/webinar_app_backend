const mongoose = require('mongoose');

const ScoresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    responses: [
        {
            question: {
                type: String,
                required: true
            },
            correctAnswer: {
                type: String,
            },
            userAnswer: {
                type: String,
            }
        }
    ],
    score: {
        type: Number, // Assuming score is a number
        required: true
    }
});

module.exports = mongoose.model('scores', ScoresSchema);
