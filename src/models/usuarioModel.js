import DBService from '../services/dbService.js';
import bcrypt from 'bcryptjs';

class usuarioModel{
    constructor(){
        this.DBService = new DBService();
    }

    async encriptarContra(contra) {
        const salt = await bcrypt.genSalt(10); 
        return await bcrypt.hash(contra, salt); 
    }

    async insertarUsuarioCliente(idRol, idEstado, idCliente, correoElectronico, nombreUsuario, password){
        try{
            const contraEncriptada = await this.encriptarContra(password);
            const procedure = 'Sistema.InsertarUsuarioCliente';
            const params = {idRol: idRol,
                            idEstado: idEstado,
                            idCliente: idCliente,
                            correoElectronico: correoElectronico,
                            nombreUsuario: nombreUsuario,
                            password: contraEncriptada };
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un usuario:', error);
            throw error;
        }
    }

    async insertarUsuarioEmpleado(idRol, idEstado, idEmpleado, correoElectronico, nombreUsuario, password){
        try{
            const contraEncriptada = await this.encriptarContra(password);
            const procedure = 'Sistema.insertarUsuarioEmpleado';
            const params = {idRol: idRol,
                            idEstado: idEstado,
                            idEmpleado: idEmpleado,
                            correoElectronico: correoElectronico,
                            nombreUsuario: nombreUsuario,
                            password: contraEncriptada};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un usuario:', error);
            throw error;
        }
    }

    async modificarUsuario(idUsuario, idRol, correoElectronico, nombreUsuario){
        try{
            const procedure = 'Sistema.ModificarUsuario';
            const params = {idUsuario: idUsuario, 
                            idRol:idRol, 
                            correoElectronico:correoElectronico, 
                            nombreUsuario:nombreUsuario};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el password:', error);
            throw error;
        }
    }
    
    async modificarEstadoUsuario(idUsuario, idEstado){
        try{
            const procedure = 'Sistema.ModificarEstadoUsuario';
            const params = {idUsuario: idUsuario, 
                            idEstado: idEstado};            
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado de un usuario:', error);
            throw error;
        }
    }

    async modificarPassword(idUsuario, password){
        try{
            const contraEncriptada = await this.encriptarContra(password);
            const procedure = 'Sistema.ModificarPassword';
            const params = {idUsuario: idUsuario, 
                            password: contraEncriptada};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el password:', error);
            throw error;
        }
    }

    async obtenerUsuarioPorCorreo(correoElectronico) {
        try {
            const procedure = 'Sistema.obtenerUsuarioPorCorreo';
            const params = { correoElectronico: correoElectronico };
            const result = await this.DBService.execProcedure(procedure, params);
            if (result.length === 0) {
                return null;  
            }
            return result[0];  
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error;
        }
    }

    async obtenerUsuarioPorId(idUsuario) {
        try {
            const procedure = 'Sistema.obtenerUsuarioPorId';
            const params = { idUsuario: idUsuario };
            const result = await this.DBService.execProcedure(procedure, params);
            if (result.length === 0) {
                return null;  
            }
            return result[0];  
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error;
        }
    }

    async verificarPassword(passwordIngresada, passwordAlmacenada) {
        return await bcrypt.compare(passwordIngresada.trim(), passwordAlmacenada.trim()); 
    } 

    async simularcontra(){
        const password = '123';
        const passCifrado = await this.encriptarContra(password);
        console.log(passCifrado);
        const valido= this.verificarPassword(password, passCifrado);
        return valido;
    }
}
export default usuarioModel;