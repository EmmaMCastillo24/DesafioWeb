import { Router } from 'express';
import categoriaProductoController from '../controllers/categoriaProductoController.js';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const router = Router();

router.post('/categoriaProductos', autenticarJWT, access, categoriaProductoController.insertarCategoriaProducto);
router.put('/categoriaProductos/:id', autenticarJWT, access, categoriaProductoController.modificarCategoriaProducto);
router.patch('/categoriaProductos/:id', autenticarJWT, access, categoriaProductoController.modificarEstadoCategoriaProducto);

export default router;  