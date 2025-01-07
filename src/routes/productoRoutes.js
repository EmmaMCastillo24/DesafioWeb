import { Router } from 'express';
import productoController from '../controllers/productoController.js';
import multer from 'multer';
import { autenticarJWT } from '../services/auth.js';  
import { access } from '../services/access.js'; 

const storage = multer.memoryStorage();  
const upload = multer({ storage: storage });
const router = Router();

//productos
router.get('/productos', autenticarJWT, access, productoController.listadoProductos);
router.get('/productos-stock', autenticarJWT, access, productoController.obtenerProductosConStock);
router.get('/productos-Top10MasVendidos', access, autenticarJWT, productoController.obtenerTop10ProductosMasVendido);
router.post('/productos', autenticarJWT, access, upload.single('foto'), productoController.insertarProducto);
router.put('/productos', autenticarJWT, access, productoController.modificarProducto);
router.patch('/productos', autenticarJWT, access, productoController.modificarEstadoProducto);

export default router;  