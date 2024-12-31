import { Router } from 'express';
import estadoController from '../controllers/estadoController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.post('/estado', autenticarJWT, access, estadoController.insertarEstado);
router.put('/estado/:id', autenticarJWT, access, estadoController.modificarEstado);

export default router;  
