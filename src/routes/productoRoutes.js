import { Router } from 'express';
import productoController from '../controllers/productoController.js';
import multer from 'multer';
import { autenticarJWT } from '../services/auth.js';  

const storage = multer.memoryStorage();  
const upload = multer({ storage: storage });
const router = Router();

//productos
router.get('/productos-stock', autenticarJWT, productoController.obtenerProductosConStock);
router.get('/productos-Top10MasVendidos', autenticarJWT, productoController.obtenerTop10ProductosMasVendido);
router.post('/productos', autenticarJWT, upload.single('foto'), productoController.insertarProducto);
router.put('/productos/:id', autenticarJWT, productoController.modificarProducto);
router.patch('/productos/:id', autenticarJWT, productoController.modificarEstadoProducto);

export default router;  