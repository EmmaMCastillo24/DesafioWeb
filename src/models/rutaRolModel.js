import DBService from '../services/dbService.js';

class rutaRolModel{
    constructor(){
        this.DBService = new DBService();
    }

    async insertarRutaRol(idRol, idRuta){
        try{
            const procedure = 'Sistema.InsertarRutaRol';
            const params = {idRol: idRol,
                            idRuta: idRuta};          
            const result = await this.DBService.execProcedure(procedure, params);
            return result.recordset;
        }catch(error){
            console.error('Error al insertar una ruta rol:', error);
            throw error;
        }
    }  
    async consultarRutaRol(idRol, idRuta) {
        console.log("entra al modelo"+idRol + idRuta);
        try {
            const procedure = 'Sistema.ConsultarRutaRol';
            const params = { idRol: idRol,
                             idRuta: idRuta};
            const result = await this.DBService.execProcedure(procedure, params);
            console.log("consumio el proc");
            if (result.length === 0) {
                return null;  
            }
            return result[0];  
        } catch (error) {
            console.error('Error al obtener la ruta por rol:', error);
            throw error;
        }
    }  
}
export default rutaRolModel;