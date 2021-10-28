const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
    N_match: Number,
    team_1: String,
    team_2: String,
    goals_t1: Number,
    goals_t2: Number
})

module.exports = model('Match', matchSchema);