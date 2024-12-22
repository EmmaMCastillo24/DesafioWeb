import RolModel from '../models/rolModel.js';

const rolModel = new RolModel();

const insertarRol = async (req, res) => {
    try {
        const { rol } = req.body;  
        await rolModel.insertarRol(rol); 
        res.status(201).json({ message: 'Rol creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear rol' });
    }
};

const modificarRol = async (req, res) => {
    try {
        const { idRol, rol} = req.body;  
        await rolModel.modificarRol(idRol, rol); 
        res.status(201).json({ message: 'Rol modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar rol' });
    }
};

export default { insertarRol, modificarRol };

