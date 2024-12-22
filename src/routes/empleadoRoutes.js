import { Router } from 'express';
import empleadoController from '../controllers/empleadoController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.post('/empleado', autenticarJWT, empleadoController.insertarEmpleado);
router.post('/empleado', autenticarJWT, empleadoController.modificarEmpleado);

export default router;  