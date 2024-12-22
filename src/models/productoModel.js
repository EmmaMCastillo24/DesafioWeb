import sql from 'mssql';
import DBService from '../services/dbService.js';

class productoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarProducto(idCategoriaProducto, idUsuario, idMarca, idEstado, codigo, stock, existenciaMinima, precio, fechaCreacion, foto, producto){
        try{
            const procedure = 'Orden.InsertarProducto';
            const params = [
                {name: 'idCategoriaProducto', type: sql.Int, value: idCategoriaProducto},
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'idMarca', type: sql.Int, value: idMarca},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'codigo', type: sql.VarChar, value: codigo},
                {name: 'stock', type: sql.Decimal, value: stock},
                {name: 'existenciaMinima', type: sql.Decimal, value: existenciaMinima},
                {name: 'precio', type: sql.Decimal, value: precio},  
                {name: 'fechaCreacion', type: sql.Date, value: fechaCreacion},  
                {name: 'producto', type: sql.VarChar, value: producto},
                {name: 'foto', type: sql.VarBinary, value: foto}
            ]
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
            const params = [
                {name: 'idProducto', type: sql.Int, value: idProducto},
                {name: 'idCategoriaProducto', type: sql.Int, value: idCategoriaProducto},
                {name: 'idMarca', type: sql.Int, value: idMarca},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'codigo', type: sql.VarChar, value: codigo},
                {name: 'stock', type: sql.Decimal, value: stock},
                {name: 'existenciaMinima', type: sql.Decimal, value: existenciaMinima},
                {name: 'precio', type: sql.Decimal, value: precio},  
                {name: 'producto', type: sql.VarChar, value: producto}
            ]
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
            const params = [
                {name: 'idProducto', type: sql.Int, value: idProducto},
                {name: 'idEstado', type: sql.Int, value: idEstado}
            ]
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