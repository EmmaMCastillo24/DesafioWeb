import DBService from '../services/dbService.js';

class marcaModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarMarca(nombreMarca){
        try{
            const procedure = 'Orden.InsertarMarca';
            const params = [
                {name: 'nombreMarca', type: sql.VarChar, value: nombreMarca},
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar una marca:', error);
            throw error;
        }
    }
    async modificarMarca(idMarca, nombreMarca){
        try{
            const procedure = 'Orden.InsertarMarca';
            const params = [
                {name: 'idMarca', type: sql.Int, value: idMarca},
                {name: 'nombreMarca', type: sql.VarChar, value: nombreMarca},
            ]
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar una marca:', error);
            throw error;
        }
    }
    
}
export default marcaModel;