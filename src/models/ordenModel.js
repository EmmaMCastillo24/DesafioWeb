import DBService from '../services/dbService.js';

class ordenModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarOrden(idUsuario, idEstado, fechaCreacion, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega, totalOrden, detallesOrden){
        try{
            const procedure = 'Orden.InsertarOrden';
            const params = {idUsuario: idUsuario,
                            idEstado: idEstado,
                            fechaCreacion: fechaCreacion,
                            nombreCompleto: nombreCompleto,
                            direccion: direccion,
                            telefono: telefono,
                            correoElectronico: correoElectronico,
                            fechaEntrega: fechaEntrega,
                            totalOrden: totalOrden,
                            detallesOrden: detallesOrden};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar una orden:', error);
            throw error;
        }
    }
    
    async modificarOrden(idOrden, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega){
        try{
            const procedure = 'Orden.ModificarOrden';
            const params = {idOrden: idOrden,
                            nombreCompleto: nombreCompleto,
                            direccion: direccion,
                            telefono: telefono,
                            correoElectronico: correoElectronico,
                            fechaEntrega: fechaEntrega};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar la orden:', error);
            throw error;
        }
    }

    async modificarEstadoOrden(idOrden, idEstado){
        try{
            const procedure = 'Orden.ModificarEstadoOrden';
            const params = {idOrden: idOrden,
                            idEstado: idEstado};         
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado de una orden:', error);
            throw error;
        }
    }

    async TotalVendidoAgosto() {
        try {
            const query = 'SELECT * FROM Orden.TotalVendidoAgosto';  
            const result = await this.DBService.query(query); 
            return result.recordset; 
          } catch (error) {
            console.error('Error al obtener el total vendido agosto:', error);
            throw error;
          }
    }
    async obtenerOrdenesPorIdUsuario(idUsuario) {
        try {
            console.log(idUsuario);
            const procedure = 'Orden.ObtenerOrdenesPorIdUsuario';
            const params = { idUsuario: idUsuario };
            const result= await this.DBService.execProcedure(procedure, params);
            if (result.length === 0) {
                return null;  
            }
            return result;  
        } catch (error) {
            console.error(`Error al obtener 1 ordenes: ${error.message}`);           
            throw error;
        }
    }

    async obtenerOrdenes() {
        try {
            const procedure = 'Orden.ObtenerOrdenes';
            const result= await this.DBService.execProcedure(procedure);
            if (result.length === 0) {
                return null;  
            }
            return result;  
        } catch (error) {
            console.error(`Error al obtener las ordenes: ${error.message}`);           
            throw error;
        }
    }
}
export default ordenModel;