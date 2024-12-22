import { Router } from 'express';
import marcaController from '../controllers/marcaController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.post('/marca', autenticarJWT, marcaController.insertarMarca);
router.put('/marca/:id', autenticarJWT, marcaController.modificarMarca);

export default router;  
