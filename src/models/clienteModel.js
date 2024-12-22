import sql from 'mssql';
import DBService from '../services/dbService.js';

class clienteModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarCliente(razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion){
        try{
            const procedure = 'Orden.InsertarCliente';
            const params = [
                {name: 'razonSocial', type: sql.VarChar, value: razonSocial},
                {name: 'nombreComercial', type: sql.VarChar, value: nombreComercial},
                {name: 'direccionEntrega', type: sql.VarChar, value: direccionEntrega},
                {name: 'telefono', type: sql.VarChar, value: telefono},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'fechaCreacion', type: sql.Date, value: fechaCreacion}  
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un cliente:', error);
            throw error;
        }
    }

    async modificarCliente(idCliente, razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion){
        try{
            const procedure = 'Orden.ModificarCliente';
            const params = [
                {name: 'idCliente', type: sql.Int, value: idCliente},
                {name: 'razonSocial', type: sql.VarChar, value: razonSocial},
                {name: 'nombreComercial', type: sql.VarChar, value: nombreComercial},
                {name: 'direccionEntrega', type: sql.VarChar, value: direccionEntrega},
                {name: 'telefono', type: sql.Varchar, value: telefono},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'fechaCreacion', type: sql.Date, value: fechaCreacion}  
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar un cliente:', error);
            throw error;
        }
    }

    async obtenerTop10ClientesMayorConsumo() {
        try {
            const query = 'SELECT * FROM Orden.Top10ClientesMayorConsumo';  
            const result = await this.DBService.query(query); 
            return result.recordset; 
          } catch (error) {
            console.error('Error al obtener el top 10 de clientes con mayor consumo:', error);
            throw error;
          }
    }
    
}
export default clienteModel;