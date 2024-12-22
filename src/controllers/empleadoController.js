import EmpleadoModel from '../models/empleadoModel.js';

const empleadoModel = new EmpleadoModel();

const insertarEmpleado = async (req, res) => {
    try {
        const { idEstado, nombreCompleto, telefono, direccion } = req.body;  
        await empleadoModel.insertarEmpleado(idEstado, nombreCompleto, telefono, direccion); 
        res.status(201).json({ message: 'Empleado creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear empleado' });
    }
};

const modificarEmpleado = async (req, res) => {
    try {
        const { idEmpleado, nombreCompleto, telefono, direccion } = req.body;  
        await empleadoModel.modificarEmpleado(idEmpleado, nombreCompleto, telefono, direccion); 
        res.status(201).json({ message: 'Empleado modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear empleado' });
    }
};

export default { insertarEmpleado, modificarEmpleado};

