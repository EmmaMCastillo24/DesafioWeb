import { Router } from 'express';
import empleadoController from '../controllers/empleadoController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.post('/empleado', autenticarJWT, access, empleadoController.insertarEmpleado);
router.post('/empleado', autenticarJWT, access, empleadoController.modificarEmpleado);

export default router;  