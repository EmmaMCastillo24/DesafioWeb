import { Router } from 'express';
import marcaController from '../controllers/marcaController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.get('/marcas', autenticarJWT, access, marcaController.listadoMarcas);
router.post('/marca', autenticarJWT, access, marcaController.insertarMarca);
router.put('/marca/:id', autenticarJWT, access, marcaController.modificarMarca);

export default router;  
