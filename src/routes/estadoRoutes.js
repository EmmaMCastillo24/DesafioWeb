import { Router } from 'express';
import estadoController from '../controllers/estadoController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.post('/estado', autenticarJWT, estadoController.insertarEstado);
router.put('/estado/:id', autenticarJWT, estadoController.modificarEstado);

export default router;  
