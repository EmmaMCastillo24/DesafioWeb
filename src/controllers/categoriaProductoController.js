import CategoriaProductoModel from '../models/categoriaProductoModel.js';

const categoriaProductoModel = new CategoriaProductoModel();

const insertarCategoriaProducto = async (req, res) => {
    try {
        const { idUsuario, idEstado, nombreCategoria, fechaCreacion } = req.body;  
        await categoriaProductoModel.insertarProducto(idUsuario, idEstado, nombreCategoria, fechaCreacion); 
        res.status(201).json({ message: 'Categoria de producto creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear categoria de producto' });
    }
};

const modificarCategoriaProducto = async (req, res) => {
    try {
        const { idCategoriaProducto, idUsuario, idEstado, nombreCategoria, fechaCreacion} = req.body;  
        await categoriaProductoModel.modificarCategoriaProducto(idCategoriaProducto, idUsuario, idEstado, nombreCategoria, fechaCreacion); 
        res.status(201).json({ message: 'Categoria producto modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar categoria producto' });
    }
};

const modificarEstadoCategoriaProducto = async (req, res) => {
    try {
        const { idCategoriaProducto, idEstado} = req.body;  
        await categoriaProductoModel.modificarEstadoCategoriaProducto(idCategoriaProducto, idEstado); 
        res.status(201).json({ message: 'Estado de la categoria producto modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar el estado de la categoria producto' });
    }
};


export default { insertarCategoriaProducto, modificarCategoriaProducto, modificarEstadoCategoriaProducto };

