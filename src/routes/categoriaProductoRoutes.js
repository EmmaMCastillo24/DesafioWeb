import { Router } from 'express';
import categoriaProductoController from '../controllers/categoriaProductoController.js';
import { autenticarJWT } from '../services/auth.js';  

const router = Router();

router.post('/categoriaProductos', autenticarJWT, categoriaProductoController.insertarCategoriaProducto);
router.put('/categoriaProductos/:id', autenticarJWT, categoriaProductoController.modificarCategoriaProducto);
router.patch('/categoriaProductos/:id', autenticarJWT, categoriaProductoController.modificarEstadoCategoriaProducto);

export default router;  