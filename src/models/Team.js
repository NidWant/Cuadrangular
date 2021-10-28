const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    name: String,
    num_team: Number,
    goals: Number,
    total_score: Number
})

module.exports = model('Team', teamSchema);