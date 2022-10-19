import dotenv from 'dotenv';
import express from './express.js';

dotenv.config();

const port = 3000;

express.listen(port);

console.log(`http://localhost:${port}/`);
