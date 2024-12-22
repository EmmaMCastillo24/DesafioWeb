import MarcaModel from '../models/marcaModel.js';

const marcaModel = new MarcaModel();

const insertarMarca = async (req, res) => {
    try {
        const { nombreMarca } = req.body;  
        await marcaModel.insertarMarca(nombreMarca); 
        res.status(201).json({ message: 'Marca creada exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear marca' });
    }
};

const modificarMarca = async (req, res) => {
    try {
        const { idMarca, nombreMarca} = req.body;  
        await marcaModel.modificarMarca(idMarca, nombreMarca); 
        res.status(201).json({ message: 'Marca modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar marca' });
    }
};

export default { insertarMarca, modificarMarca };

