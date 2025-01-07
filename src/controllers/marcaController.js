import MarcaModel from '../models/marcaModel.js';

const marcaModel = new MarcaModel();

const insertarMarca = async (req, res) => {
    try {
        const { nombreMarca } = req.body;  
        await marcaModel.insertarMarca(nombreMarca); 
        res.status(201).json({ message: 'Marca creada exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear marca' });
    }
};

const modificarMarca = async (req, res) => {
    try {
        const { idMarca, nombreMarca} = req.body;  
        await marcaModel.modificarMarca(idMarca, nombreMarca); 
        res.status(201).json({ message: 'Marca modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar marca' });
    }
};

const listadoMarcas = async (req, res) => {
    try {
      const marcas = await marcaModel.listadoMarca();
      return res.status(200).json({ message: 'marcas obtenidas correctamente', data: marcas });

    } catch (error) {
      console.error('Error al obtener el listado de marcas:', error);
      res.status(500).json({ error: 'Error al obtener los marcas' });
    }
  };

export default { insertarMarca, modificarMarca, listadoMarcas };

