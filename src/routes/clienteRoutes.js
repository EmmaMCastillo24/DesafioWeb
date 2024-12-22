import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.get('/cliente-Top10MasVendidos', autenticarJWT, clienteController.obtenerTop10ClientesMayorConsumo);
router.post('/cliente', autenticarJWT, clienteController.insertarCliente);
router.put('/cliente/:id', autenticarJWT, clienteController.modificarCliente);

export default router;  
