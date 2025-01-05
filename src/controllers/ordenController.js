import OrdenModel from '../models/ordenModel.js';

const ordenModel = new OrdenModel();

const insertarOrden = async (req, res) => {
    try {
        const { idUsuario, idEstado, fechaCreacion, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega, totalOrden, detallesOrden } = req.body;  
        const detallesOrdenJSON = JSON.stringify(detallesOrden);
        await ordenModel.insertarOrden(idUsuario, idEstado, fechaCreacion, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega, totalOrden, detallesOrdenJSON); 
        res.status(201).json({ message: 'orden creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear orden' });
    }
};

const modificarOrden = async (req, res) => {
    try {
        const { idOrden, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega} = req.body;  
        await ordenModel.modificarOrden(idOrden, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega); 
        res.status(201).json({ message: 'Orden modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar orden' });
    }
};

const modificarEstadoOrden = async (req, res) => {
    try {
        console.log("entra a patch" +req);
        const { idOrden, idEstado} = req.body;  
        await ordenModel.modificarEstadoOrden(idOrden, idEstado); 
        res.status(201).json({ message: 'Estado de orden modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar estado de orden' });
    }
};

const TotalVendidoAgosto = async (req, res) => {
    try {
      const total = await ordenModel.TotalVendidoAgosto();
      res.status(200).json(total);
    } catch (error) {
      console.error('Error al obtener el total vendido en agosto:', error);
      res.status(500).json({ error: 'Error al obtener el total' });
    }
  };

  const obtenerOrdenesPorIdUsuario = async (req, res) => {
    try {
        const { idUsuario } = req.body; // Obtener el idUsuario del cuerpo de la petición

        // Verificar que el idUsuario esté presente
        if (!idUsuario) {
            return res.status(400).json({ message: 'idUsuario es requerido' });
        }

        // Obtener las órdenes utilizando el idUsuario
        const ordenes = await ordenModel.obtenerOrdenesPorIdUsuario(idUsuario);

        // Verificar si no se encontraron órdenes
        if (!ordenes || ordenes.length === 0) {
            return res.status(404).json({ message: 'No se encontraron órdenes para este usuario' });
        }

        // Responder con las órdenes encontradas
        return res.status(200).json({ message: 'Órdenes obtenidas correctamente', data: ordenes });
        
    } catch (error) {
        // En caso de error, responder con el mensaje de error
        console.error(`Error al obtener las órdenes: ${error.message}`);
        return res.status(500).json({ message: `Error al obtener las órdenes: ${error.message}` });
    }
};



export default { insertarOrden, modificarOrden, modificarEstadoOrden, TotalVendidoAgosto, obtenerOrdenesPorIdUsuario };

