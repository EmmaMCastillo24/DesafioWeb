import sql from 'mssql';
import DBService from '../services/dbService.js';

class empleadoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarEmpleado(idEstado, nombreCompleto, telefono, direccion){
        try{
            const procedure = 'Sistema.InsertarEmpleado';
            const params = {idEstado: idEstado,
                            nombreCompleto: nombreCompleto,
                            telefono: telefono,
                            direccion: direccion};
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
            const params = {idEmpleado: idEmpleado,
                            nombreCompleto: nombreCompleto,
                            telefono: telefono,
                            direccion: direccion};
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el empleado:', error);
            throw error;
        }
    }
    
}
export default empleadoModel;