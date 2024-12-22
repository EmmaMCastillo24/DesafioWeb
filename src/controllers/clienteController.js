import ClienteModel from '../models/clienteModel.js';

const clienteModel = new ClienteModel();

const insertarCliente = async (req, res) => {
    try {
        const { razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion } = req.body;  
        await clienteModel.insertarCliente(razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion); 
        res.status(201).json({ message: 'Cliente creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear cliente' });
    }
};

const modificarCliente = async (req, res) => {
    try {
        const { idCliente, razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion} = req.body;  
        await clienteModel.modificarCliente(idCliente, razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion); 
        res.status(201).json({ message: 'Cliente modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar cliente' });
    }
};

const obtenerTop10ClientesMayorConsumo = async (req, res) => {
    try {
      const clientes = await clienteModel.obtenerTop10ClientesMayorConsumo();
      res.status(200).json(clientes);
    } catch (error) {
      console.error('Error al obtener el top 10 de clientes mayor consumo:', error);
      res.status(500).json({ error: 'Error al obtener los clientes' });
    }
  };
export default { insertarCliente, modificarCliente, obtenerTop10ClientesMayorConsumo };

