import { Router } from 'express';
import usuarioController from '../controllers/usuarioController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.post('/usuario/empleado', autenticarJWT, access, usuarioController.insertarUsuarioEmpleado);
router.post('/usuario/cliente', autenticarJWT, access, usuarioController.insertarUsuarioCliente);
router.put('/usuario', autenticarJWT, access, usuarioController.modificarUsuario);
router.patch('/usuario/:id/estado', access,autenticarJWT, usuarioController.modificarEstadoUsuario);
router.patch('/usuario/:id/password', access, autenticarJWT, usuarioController.modificarPassword);

export default router;  