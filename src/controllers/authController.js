import UsuarioModel from '../models/usuarioModel.js';
import { generarToken } from '../services/auth.js';

const usuarioModel = new UsuarioModel();

const loginUsuario = async (req, res) => {
    const { correoElectronico, contrasena } = req.body;

    try {
        const usuario = await usuarioModel.obtenerUsuarioPorCorreo(correoElectronico);
        
        if (!usuario) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }
        const esValida = await usuarioModel.verificarPassword(contrasena, usuario.password);
        if (!esValida) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        const token = generarToken(usuario.idUsuario);  

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token,
            role: usuario.idRol,
            usuario: usuario.idUsuario
        });

        //const usuario = await usuarioModel.simularcontra();

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al autenticar el usuario' });
    }
};

export default {
    loginUsuario
};