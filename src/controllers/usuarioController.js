import UsuarioModel from '../models/usuarioModel.js';

const usuarioModel = new UsuarioModel();

const insertarUsuarioCliente = async (req, res) => {
    try {
        const { idRol, idEstado, idCliente, correoElectronico, nombreUsuario, password } = req.body;  
        await usuarioModel.insertarUsuarioCliente(idRol, idEstado, idCliente, correoElectronico, nombreUsuario, password); 
        res.status(201).json({ message: 'usuario creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
};
const insertarUsuarioEmpleado = async (req, res) => {
    try {
        const { idRol, idEstado, idEmpleado, correoElectronico, nombreUsuario, password } = req.body;  
        await usuarioModel.insertarUsuarioEmpleado(idRol, idEstado, idEmpleado, correoElectronico, nombreUsuario, password); 
        res.status(201).json({ message: 'usuario creado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
};

const modificarUsuario = async (req, res) => {
    try {
        const { idUsuario, idRol, correoElectronico, nombreUsuario} = req.body;  
        await usuarioModel.modificarUsuario(idUsuario, idRol, correoElectronico, nombreUsuario); 
        res.status(201).json({ message: 'Usuario modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar el usuario' });
    }
};

const modificarEstadoUsuario = async (req, res) => {
    try {
        const { idUsuario, idEstado} = req.body;  
        await usuarioModel.modificarEstadoUsuario(idUsuario, idEstado); 
        res.status(201).json({ message: 'Estado de usuario modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar estado de usuario' });
    }
};

const modificarPassword = async (req, res) => {
    try {
        const { idUsuario, password} = req.body;  
        await usuarioModel.modificarPassword(idUsuario, password); 
        res.status(201).json({ message: 'Password modificado exitosamente' });
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ error: 'Error al modificar el password' });
    }
};

const obtenerUsuarioPorId = async (id) => {  
    console.log(id)
    const idUsuario=id;
    try {
        if (!id) {
            throw new Error('idUsuario es requerido');
        }

        const usuario = await usuarioModel.obtenerUsuarioPorId(idUsuario); 
        console.log("Usuario encontrado:", usuario);  // Agrega un log para depurar

        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }

        // Retorna el usuario encontrado
        return usuario;
    } catch (error) {
        throw new Error(`Error al obtener usuario: ${error.message}`);
    }
};


export default {insertarUsuarioCliente, insertarUsuarioEmpleado, modificarUsuario, modificarEstadoUsuario, modificarPassword, obtenerUsuarioPorId };

