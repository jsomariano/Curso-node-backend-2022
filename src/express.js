const express = require('express')
const bodyParser = require("body-parser")

const usuarios = require("./domains/usuarios/controllers")

const app = express()

app.use(bodyParser.json())
app.get("/", (request, response, next) => { response.send("Hello world!") })
app.use("/usuarios", usuarios)

module.exports = app