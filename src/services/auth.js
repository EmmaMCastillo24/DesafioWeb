import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Función para generar un JWT
export const generarToken = (userId) => {
    const payload = { id: userId };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
    return token;
};

// Función para verificar un JWT
export const verificarToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; // Si el token es válido, se retorna el payload decodificado
    } catch (error) {
        throw new Error('Token inválido');
    }
};

// Middleware para proteger rutas
export const autenticarJWT = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'Token no proporcionado' });
    }

    // Eliminamos el prefijo 'Bearer ' si está presente
    const tokenSinBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

    try {
        const decoded = verificarToken(tokenSinBearer);  // Verificamos el token
        req.user = decoded;  // Guardamos los datos del usuario en la solicitud
        next();  // Llamamos al siguiente middleware o controlador
    } catch (error) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
};