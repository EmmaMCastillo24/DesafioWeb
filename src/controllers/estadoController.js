import EstadoModel from '../models/estadoModel.js';

const estadoModel = new EstadoModel();

const insertarEstado = async (req, res) => {
    try {
        const { estado } = req.body;  
        await estadoModel.insertarCliente(estado); 
        res.status(201).json({ message: 'Estado creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear estado' });
    }
};

const modificarEstado = async (req, res) => {
    try {
        const { idEstado, estado} = req.body;  
        await estadoModel.modificarEstado(idEstado, estado); 
        res.status(201).json({ message: 'Estado modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar estado' });
    }
};

export default { insertarEstado, modificarEstado };

