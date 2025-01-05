import express, { json } from 'express';
import DBService from './services/dbService.js';
import authRoutes from './routes/authRoutes.js';
import categoriaProductoRouter from './routes/categoriaProductoRoutes.js';
import clienteRouter from './routes/clienteRoutes.js';
import empleadoRouter from './routes/empleadoRoutes.js';
import estadoRouter from './routes/estadoRoutes.js';
import marcaRouter from './routes/marcaRoutes.js';
import ordenRouter from './routes/ordenRoutes.js';
import productoRouter from './routes/productoRoutes.js';
import rolRouter from './routes/rolRoutes.js';
import usuarioRouter from './routes/usuarioRoutes.js';
import cors from 'cors';

const app = express();
const dbService = new DBService();

app.use(cors());
process.on('SIGINT', async () => {
  try {
    console.log("Cerrando servidor...");
    await dbService.close(); 
    console.log("Conexión a la base de datos cerrada");
    process.exit(0);  
  } catch (error) {
    console.error("Error al cerrar la conexión:", error);
    process.exit(1); 
  }
});

process.on('SIGTERM', async () => {
  try {
    console.log("Cerrando servidor...");
    await dbService.close();  
    console.log("Conexión a la base de datos cerrada");
    process.exit(0);  
  } catch (error) {
    console.error("Error al cerrar la conexión:", error);
    process.exit(1);  
  }
});

app.use(json()); 


// Rutas
app.use('/api', categoriaProductoRouter);
app.use('/api', clienteRouter);
app.use('/api', empleadoRouter);
app.use('/api', estadoRouter);
app.use('/api', marcaRouter);
app.use('/api', ordenRouter);
app.use('/api', productoRouter);
app.use('/api', rolRouter);
app.use('/api', usuarioRouter);
app.use('/api', authRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});