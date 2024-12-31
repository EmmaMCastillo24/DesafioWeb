import DBService from '../services/dbService.js';

class estadoModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarEstado(estado){
        try{
            const procedure = 'Sistema.InsertarEstado';
            const params = {estado: estado};
            
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar un estado:', error);
            throw error;
        }
    }

    async modificarEstado(idEstado, estado){
        try{
            const procedure = 'Sistema.ModificarEstado';
            const params = {'idEstado': idEstado,
                            'estado': estado};            
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar el estado:', error);
            throw error;
        }
    }
    
}
export default estadoModel;