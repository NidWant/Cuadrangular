const mongoose = require('mongoose');

const URI = 'mongodb://localhost/databasetest';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.on('open', () => {
    console.log('Base de datos conectada');
})