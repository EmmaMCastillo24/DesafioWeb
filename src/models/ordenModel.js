import DBService from '../services/dbService.js';

class ordenModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarOrden(idUsuario, idEstado, fechaCreacion, nombreCompleto, direccion, telefono, correoElectronico, fechaEntrega, totalOrden, detallesOrden){
        try{
            const procedure = 'Orden.InsertarOrden';
            const params = [
                {name: 'idUsuario', type: sql.Int, value: idUsuario},
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'fechaCreacion', type: sql.Date, value: fechaCreacion},  
                {name: 'nombreCompleto', type: sql.VarChar, value: nombreCompleto},
                {name: 'direccion', type: sql.VarChar, value: direccion},
                {name: 'telefono', type: sql.VarChar, value: telefono},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'fechaEntrega', type: sql.Date, value: fechaEntrega},  
                {name: 'totalOrden', type: sql.Decimal, value: totalOrden},
                {name: 'detallesOrden', type: sql.NVarChar, value: detallesOrden}
            ]
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
            const params = [
                {name: 'idOrden', type: sql.Int, value: idOrden},
                {name: 'nombreCompleto', type: sql.VarChar, value: nombreCompleto},
                {name: 'direccion', type: sql.VarChar, value: direccion},
                {name: 'telefono', type: sql.VarChar, value: telefono},
                {name: 'correoElectronico', type: sql.VarChar, value: correoElectronico},
                {name: 'fechaEntrega', type: sql.Date, value: fechaEntrega}
            ]
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
            const params = [
                {name: 'idOrden', type: sql.Int, value: idOrden},
                {name: 'idEstado', type: sql.Int, value: idEstado}
            ]
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
}
export default ordenModel;