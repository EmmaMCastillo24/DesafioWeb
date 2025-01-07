import DBService from '../services/dbService.js';

class categoriaProductoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarCategoriaProducto(idUsuario, idEstado, nombreCategoria, fechaCreacion){
        try{
            const procedure = 'Orden.InsertarCategoriaProducto';
            const params = {idUsuario: idUsuario,
                            idEstado: idEstado,
                            nombreCategoria: nombreCategoria,
                            fechaCreacion: fechaCreacion};          
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
            const params = {idCategoriaProducto: idCategoriaProducto,
                            idUsuario: idUsuario,
                            idEstado: idEstado,
                            nombreCategoria: nombreCategoria,
                            fechaCreacion: fechaCreacion};
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
            const params = {idCategoriaProducto: idCategoriaProducto,
                            idEstado: idEstado};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado de una categoria:', error);
            throw error;
        }
    }
    async listadoCategoriaProducto() {
        try {
            const query = 'SELECT * FROM Orden.ListadoCategoriaProducto';  
            const result = await this.DBService.query(query); 
            return result; 
          } catch (error) {
            console.error('Error al obtener las categorias :', error);
            throw error;
          }
    }
}

export default categoriaProductoModel;