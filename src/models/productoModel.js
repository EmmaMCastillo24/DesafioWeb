import DBService from '../services/dbService.js';

class productoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarProducto(idCategoriaProducto, idUsuario, idMarca, idEstado, codigo, stock, existenciaMinima, precio, fechaCreacion, foto, producto){
        try{
            const procedure = 'Orden.InsertarProducto';
            const params = {idCategoriaProducto: idCategoriaProducto,
                            idUsuario: idUsuario,
                            idMarca: idMarca,
                            idEstado: idEstado,
                            codigo: codigo,
                            stock: stock,
                            existenciaMinima: existenciaMinima,
                            precio: precio,
                            fechaCreacion: fechaCreacion,
                            producto: producto,
                            foto: foto};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un producto:', error);
            throw error;
        }
    }

    async modificarProducto(idProducto, idCategoriaProducto, idMarca, idEstado, codigo, stock, existenciaMinima, precio, producto){
        try{
            const procedure = 'Orden.ModificarProducto';
            const params = {idProducto, idProducto,
                            idCategoriaProducto: idCategoriaProducto,
                            idMarca: idMarca,
                            idEstado: idEstado,
                            codigo: codigo,
                            stock: stock,
                            existenciaMinima: existenciaMinima,
                            precio: precio,
                            producto: producto};
            
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar un producto:', error);
            throw error;
        }
    }

    async modificarEstadoProducto(idProducto, idEstado){
        try{
            const procedure = 'Orden.ModificarEstadoProducto';
            const params = {idProducto: idProducto,
                            idEstado: idEstado};
                        const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado de un producto:', error);
            throw error;
        }
    }

    async obtenerProductosConStock() {
        try {
            const query = 'SELECT * FROM Orden.ProductosStockExistencia';  
            const result = await this.DBService.query(query); 
            return result.recordset; 
          } catch (error) {
            console.error('Error al obtener productos con stock:', error);
            throw error;
          }
    }

    async obtenerTop10ProductosMasVendido() {
        try {
            const query = 'SELECT * FROM Orden.Top10ProductosMasVendidos';  
            const result = await this.DBService.query(query); 
            return result.recordset; 
          } catch (error) {
            console.error('Error al obtener el top 10 de productos mas vendidos:', error);
            throw error;
          }
    }
    
}

export default productoModel;