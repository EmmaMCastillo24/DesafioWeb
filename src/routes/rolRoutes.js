import { Router } from 'express';
import rolController from '../controllers/rolController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.post('/rol', autenticarJWT, access, rolController.insertarRol);
router.put('/rol/:id', autenticarJWT, access, rolController.modificarRol);

export default router;  