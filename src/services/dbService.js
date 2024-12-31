import { Sequelize } from 'sequelize'; 
import sequelize from '../config/db.js';

class DBService{
    constructor(){
        this.sequelize = sequelize;
    }

    //Conexion a la base de datos
    async connect(){
            try{
                await this.sequelize.authenticate();
                console.log('Conexion con exito');
            }catch(error){
                console.error('error en la conexion', error);
                throw error;
            }        
    }

    //Consultas
    async query(queryString){
        try{
            await this.connect();
            const result = await this.sequelize.query(queryString, {
                type: Sequelize.QueryTypes.SELECT 
            });
            return result; 
        } catch (error) {
            console.error("Error al ejecutar la consulta:", error);
            throw error;
        }
    }    

    //Ejecutar sp
    async execProcedure(procedureName, parameters = {}){
        try{
            await this.connect();      
            const paramNames = Object.keys(parameters);
            const queryParams = paramNames.map(param => `@${param} = :${param}`).join(", ");
                  const query = `EXEC ${procedureName} ${queryParams}`;
                  const result = await sequelize.query(query, {
              replacements: parameters, 
              type: sequelize.QueryTypes.SELECT
            });
            return result;
        }catch(error){
            console.error("Error en el consumo del sp:", error);
            throw error;
        }
    }

     // Cerrar la conexión
     async close() {
        try {
            await this.sequelize.close(); 
            console.log("Conexión cerrada");
            
        } catch (error) {
            console.error("Error al cerrar la conexión:", error);
            throw error;
        }
    }
}

export default DBService;