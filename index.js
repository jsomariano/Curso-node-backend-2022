const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.post("/", function (req, res) {
    res.send("Hello world com Post")
})

app.put("/", function (req, res) {
    res.send("Hello world com Put")
})

app.get("/:meuParametro", function (req, res) {
    res.send(`Hello world com ${req.params.meuParametro}`)
})

app.delete("/", function (req, res) {
    res.send("Hello world com delete")
})

app.listen(port)

console.log(`Application running on http://localhost:${port}/`)
