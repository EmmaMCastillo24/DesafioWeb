import mssql from 'mssql';
const { connect: _connect } = mssql;
import dbConfig from '../config/db.js';

class DBService{
    constructor(){
    }

    //Conexion a la base de datos
    async connect(){
            try{
                this.pool = await _connect(dbConfig);
                console.log('Conexion con exito');
            }catch(error){
                console.error('error en la conexion', error);
                throw error;
            }
        
        return this.pool;
    }
    //Consultas
    async query(queryString){
        try{
            if (!this.pool) {
                await this.connect(); 
            }  
            const result = await this.pool.request().query(queryString);  
            return result; 
        } catch (error) {
            console.error("Error al ejecutar la consulta:", error);
            throw error;
        }
    }    

    //Ejecutar sp
    async execProcedure(procedureName, parameters = []){
        try{
            if (!this.pool) {
                await this.connect(); 
            }  
            const request = await this.pool.request();
            parameters.forEach((param)=>{
                request.input(param.name, param.type, param.value);
            });
            return await request.execute(procedureName);
        }catch(error){
            console.error("Error en el consumo del sp:", error);
            throw error;
        }
    }

     // Cerrar la conexión
     async close() {
        try {
            if (this.pool) {
                await this.pool.close();  // Cerramos la conexión cuando ya no sea necesaria
                console.log("Conexión cerrada");
            }
        } catch (error) {
            console.error("Error al cerrar la conexión:", error);
            throw error;
        }
    }
}

export default DBService;