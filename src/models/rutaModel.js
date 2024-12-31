import DBService from '../services/dbService.js';

class rutaModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarRuta(ruta, metodo){
        try{
            const procedure = 'Sistema.InsertarRuta';
            const params = {ruta: ruta,
                            metodo: metodo};          
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar una ruta:', error);
            throw error;
        }
    }    

    async consultarRuta(ruta, metodo) {
        try {
            const procedure = 'Sistema.ConsultarRuta';
            const params = { ruta: ruta,
                             metodo: metodo};
            const result = await this.DBService.execProcedure(procedure, params);
            if (result.length === 0) {
                return null;  
            }
            return result[0].idRuta;  
        } catch (error) {
            console.error('Error al obtener la ruta:', error);
            throw error;
        }
    }  
}
export default rutaModel;