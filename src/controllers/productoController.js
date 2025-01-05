import ProductoModel from '../models/productoModel.js';
import multer from 'multer';

const productoModel = new ProductoModel();

const insertarProducto = async (req, res) => {
    try {
        const { idCategoriaProducto, idUsuario, idMarca, idEstado, codigo, stock, existenciaMinima, precio, fechaCreacion, producto } = req.body;  
        const foto = req.file ? req.file.buffer : null;
        await productoModel.insertarProducto(idCategoriaProducto, idUsuario, idMarca, idEstado, codigo, stock, existenciaMinima, precio, fechaCreacion, foto, producto); 
        res.status(201).json({ message: 'Producto creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

const modificarProducto = async (req, res) => {
    try {
        const { idProducto, idCategoriaProducto, idMarca, idEstado, codigo, stock, existenciaMinima, precio, producto} = req.body;  
        await productoModel.modificarProducto(idProducto, idCategoriaProducto, idMarca, idEstado, codigo, stock, existenciaMinima, precio, producto); 
        res.status(201).json({ message: 'Producto modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar producto' });
    }
};

const modificarEstadoProducto = async (req, res) => {
    try {
        const { idProducto, idEstado} = req.body;  
        await productoModel.modificarEstadoProducto(idProducto, idEstado); 
        res.status(201).json({ message: 'Estado del producto modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar el estado del producto' });
    }
};

const obtenerProductosConStock = async (req, res) => {
  try {
      const productos = await productoModel.obtenerProductosConStock();
      // Aquí asumimos que cada producto tiene una propiedad "foto" que es un Buffer
      const productosConImagenes = productos.map(producto => {
          if (producto.foto) {
              // Convertir el Buffer de la imagen a Base64
              const imagenBase64 = producto.foto.toString('base64');
              // Añadir la imagen en formato Base64 a la respuesta
              producto.foto = `data:image/jpeg;base64,${imagenBase64}`;
          }
          return producto;
      });

      res.status(200).json(productosConImagenes); // Enviar los productos con las imágenes
  } catch (error) {
      console.error('Error al obtener productos con stock:', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
  }
};


  const obtenerTop10ProductosMasVendido = async (req, res) => {
    try {
      const productos = await productoModel.obtenerTop10ProductosMasVendido();
      res.status(200).json(productos);
    } catch (error) {
      console.error('Error al obtener el top 10 de productos mas vendidos:', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  };

export default { insertarProducto, modificarProducto, modificarEstadoProducto, obtenerProductosConStock, obtenerTop10ProductosMasVendido };

