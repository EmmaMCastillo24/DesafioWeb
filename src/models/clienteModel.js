import DBService from '../services/dbService.js';

class clienteModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarCliente(razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico, fechaCreacion){
        try{
            const procedure = 'Orden.InsertarCliente';
            const params = {razonSocial: razonSocial,
                            nombreComercial: nombreComercial,
                            direccionEntrega: direccionEntrega,
                            telefono: telefono,
                            correoElectronico: correoElectronico};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un cliente:', error);
            throw error;
        }
    }

    async modificarCliente(idCliente, razonSocial, nombreComercial, direccionEntrega, telefono, correoElectronico){
        try{
            const procedure = 'Orden.ModificarCliente';
            const params = {idCliente: idCliente,
                            razonSocial: razonSocial,
                            nombreComercial: nombreComercial,
                            direccionEntrega: direccionEntrega,
                            telefono: telefono,
                            correoElectronico: correoElectronico};        
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar un cliente:', error);
            throw error;
        }
    }
    async modificarEstadoCliente(idCliente, idEstado){
        try{
            const procedure = 'Orden.ModificarEstadoCliente';
            const params = {idCliente: idCliente, 
                            idEstado: idEstado};            
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado de un cliente:', error);
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

    async listadoClientes() {
        try {
            const query = 'SELECT * FROM Orden.ListadoClientes';  
            const result = await this.DBService.query(query); 
            return result; 
          } catch (error) {
            console.error('Error al obtener los clientes :', error);
            throw error;
          }
    }
    
}
export default clienteModel;