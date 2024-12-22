import sql from 'mssql';
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
            const params = [
                {name: 'idRol', type: sql.Int, value: idRol},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'idCliente', type: sql.Int, value: idCliente},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'nombreUsuario', type: sql.VarChar, value: nombreUsuario},
                {name: 'password', type: sql.VarChar, value: contraEncriptada.trim()}
            ]
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
            const params = [
                {name: 'idRol', type: sql.Int, value: idRol},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'idEmpleado', type: sql.Int, value: idEmpleado},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'nombreUsuario', type: sql.VarChar, value: nombreUsuario},
                {name: 'password', type: sql.VarChar, value: contraEncriptada}
            ]
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
            const params = [
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'idRol', type: sql.Int, value: idRol},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'nombreUsuario', type: sql.VarChar, value: nombreUsuario}
            ]
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
            const params = [
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'idEstado', type: sql.Int, value: idEstado}
            ]
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
            const params = [
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'password', type: sql.VarChar, value: contraEncriptada}
            ]
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
            const params = [
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            if (result.recordset.length === 0) {
                return null;  
            }
            console.log(result.recordset[0]);
            return result.recordset[0];  
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error;
        }
    }

    async verificarPassword(passwordIngresada, passwordAlmacenada) {
        console.log("ingresado:" + passwordIngresada);
        console.log("almacenado:" + passwordAlmacenada);  
        return await bcrypt.compare(passwordIngresada.trim(), passwordAlmacenada.trim()); 
    } 
}
export default usuarioModel;