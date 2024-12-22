import { Router } from 'express';
import rolController from '../controllers/rolController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.post('/rol', autenticarJWT, rolController.insertarRol);
router.put('/rol/:id', autenticarJWT, rolController.modificarRol);

export default router;  