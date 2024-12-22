import { Router } from 'express';
import usuarioController from '../controllers/usuarioController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.post('/usuario/empleado', autenticarJWT, usuarioController.insertarUsuarioEmpleado);
router.post('/usuario/cliente', autenticarJWT, usuarioController.insertarUsuarioCliente);
router.put('/usuario', autenticarJWT, usuarioController.modificarUsuario);
router.patch('/usuario/:id/estado', autenticarJWT, usuarioController.modificarEstadoUsuario);
router.patch('/usuario/:id/password', autenticarJWT, usuarioController.modificarPassword);

export default router;  