import sql from 'mssql';
import DBService from '../services/dbService.js';

class empleadoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarEmpleado(idEstado, nombreCompleto, telefono, direccion){
        try{
            const procedure = 'Sistema.InsertarEmpleado';
            const params = [
                {name: 'idEstado', type: sql.Int, value: idEstado},
                {name: 'nombreCompleto', type: sql.VarChar, value: nombreCompleto},
                {name: 'telefono', type: sql.VarChar, value: telefono},
                {name: 'direccion', type: sql.VarChar, value: direccion}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un empleado:', error);
            throw error;
        }
    }

    async modificarEmpleado(idEmpleado, nombreCompleto, telefono, direccion){
        try{
            const procedure = 'Sistema.ModificarEmpleado';
            const params = [
                {name: 'idEmpleado', type: sql.Int, value: idEmpleado},
                {name: 'nombreCompleto', type: sql.VarChar, value: nombreCompleto},
                {name: 'telefono', type: sql.VarChar, value: telefono},
                {name: 'direccion', type: sql.VarChar, value: direccion}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el empleado:', error);
            throw error;
        }
    }
    
}
export default empleadoModel;