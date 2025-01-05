import RutaRolModel from '../models/rutaRolModel.js';

const rutaRolModel = new RutaRolModel();

/*const consultarRutaRol = async (req, res) => {
    try {
        const  {idRol, idRuta} = req.body;  
        await rutaRolModel.consultarRutaRol(idRol, idRuta); 
        res.status(201).json({ message: 'Consulta exitosa' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }
};*/

const consultarRutaRol = async (idRol, idRuta) => {  
    try {
        const rutaRol = await rutaRolModel.consultarRutaRol(idRol, idRuta); 
        console.log("ruta rol encontrada:", rutaRol);  // Agrega un log para depurar

        if (!rutaRol) {
            throw new Error('ruta rol no encontrado');
        }

        // Retorna el usuario encontrado
        return rutaRol;
    } catch (error) {
        throw new Error(`Error al obtener ruta rol: ${error.message}`);
    }
};

export default { consultarRutaRol };

