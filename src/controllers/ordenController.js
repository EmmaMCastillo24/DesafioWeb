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
export default { insertarOrden, modificarOrden, modificarEstadoOrden, TotalVendidoAgosto };

