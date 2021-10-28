const express = require('express');
const cors = require('cors');
const app = express();

//Configuracion
app.set('port', 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/registration', require('./routes/registration'));
app.use('/api/match', require('./routes/match'));



module.exports = app;