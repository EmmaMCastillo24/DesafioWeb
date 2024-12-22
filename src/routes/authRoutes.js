import { Router } from 'express';
import authController from '../controllers/authController.js';

const router = Router();

// Ruta para login
router.post('/login', authController.loginUsuario);

export default router;