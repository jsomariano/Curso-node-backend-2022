import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import knex from '../../config/knex.js'

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


  let senhaCriptografada; 
  if(senha) {
     senhaCriptografada = await bcrypt.hash(senha, 12);
  }

  return {
    nome,
    email,
    senha: senhaCriptografada,
    data_nascimento: new Date(dataNascimento).toISOString(),
  };
}

async function login(request, response) {
  const { email, senha } = request.body;

  const usuario = await knex('usuarios')
    .where('email', email)
    .first();

  if (!usuario || !bcrypt.compareSync(String(senha), usuario.senha)) {
    return response
      .status(403)
      .send({
        message: 'Usuário não existe ou a senha esta incorreta.',
      });
  }

  const token = jwt.sign(usuario, process.env.JWT_SECRET_KEY);

  delete usuario.senha;

  return response
    .json({
      token,
      usuario,
    });
}

async function cadastraUsuario(request, response) {
  const valuesToInsert = await formatValues(request.body);

  const [usuarioCadastradoId] = await knex('usuarios')
    .insert(valuesToInsert);

  const usuario = await getUsuarioById(usuarioCadastradoId);

  return response
    .send(usuario);
}

async function editaUsuario(request, response) {
  const {
    usuarioId,
  } = request.params;

  const valuesToInsert = await formatValues(request.body);

  const usuarioEditadoId = await knex('usuarios')
    .where('id', usuarioId)
    .update(valuesToInsert);

  const usuario = await getUsuarioById(usuarioEditadoId);

  return response
    .send(usuario);
}

async function consultaUsuario(request, response) {
  const {
    usuarioId,
  } = request.params;

  const usuario = await getUsuarioById(usuarioId);

  return response
    .json(usuario);
}

async function listaUsuarios(request, response) {
  const usuarios = await knex('usuarios');

  response.json(usuarios);
}

async function excluiUsuario(request, response) {
  const {
    usuario,
  } = request;

  const usuarioIdToRemove = Number(request.params.usuarioId);

  if (usuarioIdToRemove !== usuario.id) {
    return response.status(401).json({ message: 'Você não possui permissao para excluir esse usuario' });
  }

  await knex('usuarios')
    .where('id', request.params.usuarioId)
    .delete();

  return response
    .sendStatus(204);
}

export default {
  excluiUsuario,
  listaUsuarios,
  consultaUsuario,
  editaUsuario,
  cadastraUsuario,
  login,
};
