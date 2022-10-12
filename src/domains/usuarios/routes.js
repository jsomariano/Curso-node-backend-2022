const express = require('express');
const authMiddleware = require('../../middlewares/auth');
const controllers = require('./controllers');

const router = express.Router();

router.post('/login', controllers.login);
router.post('/cadastro', authMiddleware, controllers.cadastraUsuario);
router.put('/:usuarioId/edicao', authMiddleware, controllers.editaUsuario);
router.get('/:usuarioId/consulta', authMiddleware, controllers.consultaUsuario);
router.get('/listagem', authMiddleware, controllers.listaUsuarios);
router.delete('/:usuarioId/delete', authMiddleware, controllers.excluiUsuario);

module.exports = router;
