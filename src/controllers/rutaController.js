import RutaModel from '../models/rutaModel.js';

const rutaModel = new RutaModel();

const consultarRuta = async (req, res) => {
    try {
        const  {ruta, metodo} = req.body;  
        await rutaModel.consultarRuta(ruta, metodo); 
        res.status(201).json({ message: 'Consulta exitosa' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error en la consulta' });
    }
};

export default { consultarRuta };
