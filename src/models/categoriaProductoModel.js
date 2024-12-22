import sql from 'mssql';
import DBService from '../services/dbService.js';

class categoriaProductoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarCategoriaProducto(idUsuario, idEstado, nombreCategoria, fechaCreacion){
        try{
            const procedure = 'Orden.InsertarCategoriaProducto';
            const params = [
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'nombreCategoria', type: sql.VarChar, value: nombreCategoria},
                {name: 'fechaCreacion', type: sql.Date, value: fechaCreacion}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar una categoria:', error);
            throw error;
        }
    }

    async modificarCategoriaProducto(idCategoriaProducto, idUsuario, idEstado, nombreCategoria, fechaCreacion){
        try{
            const procedure = 'Orden.ModificarCategoriaProducto';
            const params = [
                {name: 'idCategoriaProducto', type: sql.Int, value: idCategoriaProducto},
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'nombreCategoria', type: sql.VarChar, value: nombreCategoria},
                {name: 'fechaCreacion', type: sql.Date, value: fechaCreacion}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar una categoria:', error);
            throw error;
        }
    }

    async modificarEstadoCategoriaProducto(idCategoriaProducto, idEstado){
        try{
            const procedure = 'Orden.ModificarEstadoCategoriaProducto';
            const params = [
                {name: 'idCategoriaProducto', type: sql.Int, value: idCategoriaProducto},
                {name: 'idEstado', type: sql.Int, value: idEstado}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado de una categoria:', error);
            throw error;
        }
    }
    
}

export default categoriaProductoModel;