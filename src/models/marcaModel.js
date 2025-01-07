import DBService from '../services/dbService.js';

class marcaModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarMarca(nombreMarca){
        try{
            const procedure = 'Orden.InsertarMarca';
            const params = {nombreMarca: nombreMarca};        
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
            const params = {idMarca: idMarca,
                            nombreMarca: nombreMarca};      
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al modificar una marca:', error);
            throw error;
        }
    }

    async listadoMarca() {
        try {
            const query = 'SELECT * FROM Orden.ListadoMarcas';  
            const result = await this.DBService.query(query); 
            return result; 
          } catch (error) {
            console.error('Error al obtener las marcas :', error);
            throw error;
          }
    }
    
}
export default marcaModel;