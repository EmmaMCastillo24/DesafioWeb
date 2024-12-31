import RutaRolModel from '../models/rutaRolModel.js';

const rutaRolModel = new RutaRolModel();

const consultarRutaRol = async (req, res) => {
    try {
        const  {idRol, idRuta} = req.body;  
        await rutaRolModel.consultarRutaRol(idRol, idRuta); 
        res.status(201).json({ message: 'Consulta exitosa' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }
};

export default { consultarRutaRol };
