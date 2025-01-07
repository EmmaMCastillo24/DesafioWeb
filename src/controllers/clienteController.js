import ClienteModel from '../models/clienteModel.js';

const clienteModel = new ClienteModel();

const insertarCliente = async (req, res) => {
    try {
        const { razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico } = req.body;  
        await clienteModel.insertarCliente(razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico); 
        res.status(201).json({ message: 'Cliente creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear cliente' });
    }
};

const modificarCliente = async (req, res) => {
  try {
      const { idCliente, razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico } = req.body;
      if (!idCliente) {
          return res.status(400).json({ error: 'Falta el idCliente en el cuerpo de la solicitud' });
      }
      await clienteModel.modificarCliente(idCliente, razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico);

      res.status(200).json({ message: 'Cliente modificado exitosamente' });
  } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({ error: 'Error al modificar cliente' });
  }
};

const modificarEstadoCliente = async (req, res) => {
  try {
      const { idCliente, idEstado} = req.body;  
      await clienteModel.modificarEstadoCliente(idCliente, idEstado); 
      res.status(201).json({ message: 'Estado del producto modificado exitosamente' });
  } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({ error: 'Error al modificar el estado del producto' });
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

  const listadoClientes = async (req, res) => {
    try {
      const clientes = await clienteModel.listadoClientes();
      return res.status(200).json({ message: 'clientes obtenidas correctamente', data: clientes });

    } catch (error) {
      console.error('Error al obtener el listado de clientes:', error);
      res.status(500).json({ error: 'Error al obtener los clientes' });
    }
  };
export default { insertarCliente, modificarCliente, modificarEstadoCliente, obtenerTop10ClientesMayorConsumo, listadoClientes };

