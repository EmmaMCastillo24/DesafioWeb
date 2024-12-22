import sql from 'mssql';
import DBService from '../services/dbService.js';

class rolModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarRol(rol){
        try{
            const procedure = 'Sistema.InsertarRol';
            const params = [
                {name: 'rol', type: sql.VarChar, value: rol},
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un rol:', error);
            throw error;
        }
    }

    async modificarRol(idRol, rol){
        try{
            const procedure = 'Sistema.ModificarRol';
            const params = [
                {name: 'idRol', type: sql.Int, value: idRol},
                {name: 'rol', type: sql.VarChar, value: rol}
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el rol:', error);
            throw error;
        }
    }
    
}
export default rolModel;