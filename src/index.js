const express = require("./express")
var port = 3000

express.listen(port)

console.log(`http://localhost:${port}/`)