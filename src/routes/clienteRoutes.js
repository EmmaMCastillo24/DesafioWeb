import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.get('/cliente-Top10MasVendidos', autenticarJWT, access, clienteController.obtenerTop10ClientesMayorConsumo);
router.post('/cliente', autenticarJWT, access, clienteController.insertarCliente);
router.put('/cliente/:id', autenticarJWT, access, clienteController.modificarCliente);

export default router;  
