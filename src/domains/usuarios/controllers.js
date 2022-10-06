const express = require('express');
const bcrypt = require('bcrypt');
const knex = require('../../config/knex');

const router = express.Router();

function getUsuarioById(usuarioId) {
  return knex('usuarios')
    .where('id', usuarioId)
    .first();
}

async function formatValues(body) {
  const {
    nome,
    email,
    senha,
    data_nascimento: dataNascimento,
  } = body;

  const senhaCriptografada = await bcrypt.hash(senha, 12);

  return {
    nome,
    email,
    senha: senhaCriptografada,
    data_nascimento: dataNascimento,
  };
}

router.post('/cadastro', async (request, response) => {
  const valuesToInsert = await formatValues(request.body);

  const [usuarioCadastradoId] = await knex('usuarios')
    .insert(valuesToInsert);

  const usuario = await getUsuarioById(usuarioCadastradoId);

  response.send(usuario);
});

router.put('/:usuarioId/edicao', async (request, response) => {
  const {
    usuarioId,
  } = request.params;

  const valuesToInsert = await formatValues(request.body);

  const usuarioEditadoId = await knex('usuarios')
    .where('id', usuarioId)
    .update(valuesToInsert);

  const usuario = await getUsuarioById(usuarioEditadoId);

  response.send(usuario);
});

router.get('/:usuarioId/consulta', async (request, response) => {
  const {
    usuarioId,
  } = request.params;

  const usuario = await getUsuarioById(usuarioId);

  response.json(usuario);
});

router.get('/listagem', async (request, response) => {
  const usuarios = await knex('usuarios');

  response.json(usuarios);
});

router.delete('/:usuarioId/delete', async (request, response) => {
  const usuarios = await knex('usuarios').where('id', request.params.usuarioId).delete();

  response.json(usuarios);
});

module.exports = router;
