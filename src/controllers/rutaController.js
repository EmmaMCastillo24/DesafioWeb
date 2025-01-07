import RutaModel from '../models/rutaModel.js';

const rutaModel = new RutaModel();

const consultarRuta = async (ruta, metodo) => {  
    try {
        const rutaRetorno = await rutaModel.consultarRuta(ruta, metodo); 
        console.log("ruta cosultada:"+ruta);
        console.log("metodo cosultada:"+metodo);
        console.log("ruta encontrada:", rutaRetorno);  // Agrega un log para depurar

        if (!rutaRetorno) {
            throw new Error('ruta no encontrado');
        }

        // Retorna el usuario encontrado
        return rutaRetorno;
    } catch (error) {
        throw new Error(`Error al obtener ruta: ${error.message}`);
    }
};

export default { consultarRuta };
