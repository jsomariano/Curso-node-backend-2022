const fileSystem = require("fs")
const express = require('express')
const app = express()
const port = 3000

const filePath = './database/database.json'

app.use(express.json())

function readFile() {
    return JSON.parse(fileSystem.readFileSync(filePath))
}

app.get('/usuarios', function (req, res) {
    const usuariosCadastrados = readFile()

    res.json(usuariosCadastrados)
})

app.post("/usuarios", function (req, res) {
    const usuariosCadastrados = readFile()

    const idAtual = usuariosCadastrados
        .reduce((previous, current) => {
            if (!current) return 1

            if (previous.id > current.id) return previous.id

            return current.id
        }, 0)

    const usuarioAtual = {
        ...req.body,
        id: idAtual + 1
    }

    usuariosCadastrados.push(usuarioAtual)

    fileSystem.writeFileSync(filePath, JSON.stringify(usuariosCadastrados))

    res.status(201).json(usuarioAtual)
})

app.put("/usuarios/:usuarioId", function (req, res) {
    const usuariosCadastrados = readFile()

    const usuarioIds = usuariosCadastrados.map(usuario => usuario.id)
    const usuarioParaAtualizarIndice = usuarioIds.indexOf(Number(req.params.usuarioId))

    usuariosCadastrados[usuarioParaAtualizarIndice] = {
        ...req.body,
        id: usuariosCadastrados[usuarioParaAtualizarIndice].id
    }

    fileSystem.writeFileSync(filePath, JSON.stringify(usuariosCadastrados))

    res.json(usuariosCadastrados[usuarioParaAtualizarIndice])
})

app.get("/usuarios/:usuarioId", function (req, res) {
    const usuariosCadastrados = readFile()

    const [usuario] = usuariosCadastrados.filter(usuarioCadastrado => usuarioCadastrado.id === Number(usuarioId))

    res.json(usuario)
})

app.delete("/usuarios/:usuarioId", function (req, res) {
    const usuariosCadastrados = readFile()

    const usuariosAtualizados = usuariosCadastrados.filter(usuarioCadastrado => usuarioCadastrado.id !== Number(req.params.usuarioId))

    fileSystem.writeFileSync(filePath, JSON.stringify(usuariosAtualizados))

    res.sendStatus(204)
})

app.listen(port)

console.log(`Application running on http://localhost:${port}/`)
