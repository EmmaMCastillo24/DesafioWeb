import { Router } from 'express';
import ordenController from '../controllers/ordenController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.get('/totalVendido-agosto', autenticarJWT, access, ordenController.TotalVendidoAgosto);
router.get('/ordenesTotales', autenticarJWT, access, ordenController.obtenerOrdenes);
router.post('/ordenes', autenticarJWT, access, ordenController.obtenerOrdenesPorIdUsuario);
router.post('/orden', autenticarJWT, access, ordenController.insertarOrden);
router.put('/orden/:id', autenticarJWT, access, ordenController.modificarOrden);
router.patch('/orden', autenticarJWT, access, ordenController.modificarEstadoOrden);

export default router;  