import express from 'express';
import bodyParser from 'body-parser';
import usuarios from './domains/usuarios/routes.js';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(function (req, res, next) {
    console.info(`${new Date()} | ${req.method} - ${req.url}`)
    next()
})
app.get('/', (request, response) => { response.send('Hello world!'); });
app.use('/usuarios', usuarios);

export default app;
