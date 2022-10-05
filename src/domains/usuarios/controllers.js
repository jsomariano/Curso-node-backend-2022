const express = require('express');
const knex = require("../../config/knex")


const router = express.Router();

router.post('/cadastro', async (request, response, next) => {
    const {
        nome,
        email,
        senha,
        data_nascimento: dataNascimento
    } = request.body

    const [usuarioCadastradoId] = await knex("usuarios")
        .insert(
            {
                nome,
                email,
                senha,
                data_nascimento: dataNascimento,
            }
        );

    const usuario = await knex("usuarios").where("id", usuarioCadastradoId).first()

    response.send(usuario)
});

router.get('/consulta', (req, res, next) => {

});

module.exports = router; 