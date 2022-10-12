const express = require('express');
const bodyParser = require('body-parser');

const usuarios = require('./domains/usuarios/routes');

const app = express();

app.use(bodyParser.json());
app.get('/', (request, response) => { response.send('Hello world!'); });
app.use('/usuarios', usuarios);

module.exports = app;
