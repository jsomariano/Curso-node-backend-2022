require('dotenv').config();
const express = require('./express');

const port = 3000;

express.listen(port);

console.log(`http://localhost:${port}/`);
