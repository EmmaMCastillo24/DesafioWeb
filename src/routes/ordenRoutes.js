import { Router } from 'express';
import ordenController from '../controllers/ordenController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.get('/totalVendido-agosto', autenticarJWT, ordenController.TotalVendidoAgosto);
router.post('/orden', autenticarJWT, ordenController.insertarOrden);
router.put('/orden/:id', autenticarJWT, ordenController.modificarOrden);
router.patch('/orden/:id', autenticarJWT, ordenController.modificarEstadoOrden);

export default router;  