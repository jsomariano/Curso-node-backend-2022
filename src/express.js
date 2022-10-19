import express from 'express';
import bodyParser from 'body-parser';
import usuarios from './domains/usuarios/routes.js';

const app = express();

app.use(bodyParser.json());
app.get('/', (request, response) => { response.send('Hello world!'); });
app.use('/usuarios', usuarios);

export default app;
