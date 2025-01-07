import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.get('/clientes', autenticarJWT, access, clienteController.listadoClientes);
router.get('/cliente-Top10MasVendidos', autenticarJWT, access, clienteController.obtenerTop10ClientesMayorConsumo);
router.post('/cliente', autenticarJWT, access, clienteController.insertarCliente);
router.put('/cliente', autenticarJWT, access, clienteController.modificarCliente);
router.patch('/clientes', autenticarJWT, access, clienteController.modificarEstadoCliente);

export default router;  
