import express from 'express';
import authMiddleware from '../../middlewares/auth.js';
import controllers from './controllers.js';

const router = express.Router();

router.post('/login', controllers.login);
router.post('/cadastro', authMiddleware, controllers.cadastraUsuario);
router.put('/:usuarioId/edicao', authMiddleware, controllers.editaUsuario);
router.get('/:usuarioId/consulta', authMiddleware, controllers.consultaUsuario);
router.get('/listagem', authMiddleware, controllers.listaUsuarios);
router.delete('/:usuarioId/delete', authMiddleware, controllers.excluiUsuario);

export default router;
