import rutaRolController from '../controllers/rutaRolController.js'; 
import rutaController from '../controllers/rutaController.js'; 
import usuarioController from '../controllers/usuarioController.js'; 

const access = async (req, res, next) => {
    try {
        const { id } = req.user;  
        const usuario = await usuarioController.obtenerUsuarioPorId(id);  
        if (!usuario || !usuario.rolId) {
            return res.status(403).json({ message: 'No se pudo obtener el rol del usuario.' });
        }
        const rolId = usuario.rolId;

        // Ahora obtenemos la ruta a la que se está intentando acceder (path + método HTTP)
        const { originalUrl, method } = req;

        // Consultar si el rol tiene acceso a esta ruta
        const accesoPermitido = await rutaRolController.consultarRutaRol({
            where: {
                idRol: rolId,
                idRuta: rutaController.consultarRuta(originalUrl, method),
            }
        });

        // Si el rol no tiene acceso, respondemos con error 403
        if (!accesoPermitido) {
            return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
        }

        // Si todo está bien, pasamos al siguiente middleware o controlador
        next();
    } catch (error) {
        console.error("Error en la validación de acceso:", error);
        return res.status(500).json({ message: 'Error en la validación de acceso.' });
    }
};

export { access };