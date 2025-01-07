import DBService from '../services/dbService.js';

class productoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarProducto(idCategoriaProducto, idUsuario, idMarca, codigo, stock, existenciaMinima, precio, foto, producto){
        try{
            const procedure = 'Orden.InsertarProducto';
            const params = {idCategoriaProducto: idCategoriaProducto,
                            idUsuario: idUsuario,
                            idMarca: idMarca,
                            codigo: codigo,
                            stock: stock,
                            existenciaMinima: existenciaMinima,
                            precio: precio,
                            producto: producto,
                            foto: foto};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un producto:', error);
            throw error;
        }
    }

    async modificarProducto(idProducto, idCategoriaProducto, idMarca, codigo, stock, existenciaMinima, precio, producto){
        try{
            const procedure = 'Orden.ModificarProducto';
            const params = {idProducto: idProducto,
                            idCategoriaProducto: idCategoriaProducto,
                            idMarca: idMarca,
                            codigo: codigo,
                            stock: stock,
                            existenciaMinima: existenciaMinima,
                            precio: precio,
                            producto: producto};
            console.log(params);
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
            return result; 
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

    async listadoProductos() {
        try {
            const query = 'SELECT * FROM Orden.ListadoProductos';  
            const result = await this.DBService.query(query); 
            return result; 
          } catch (error) {
            console.error('Error al obtener los productos :', error);
            throw error;
          }
    }
    
}

export default productoModel;