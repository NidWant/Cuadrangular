const { Schema, model } = require('mongoose');

const resultSchema = new Schema({
    game: Number,
    position_1: String,
    position_2: String,
    position_3: String,
    position_4: String,
})

module.exports = model('Result', resultSchema);