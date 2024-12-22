import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config(); 

const dbConfig = {
    user: 'sa',
    password: '12345678',
    server: 'EMMA-CASTILLO\\SQLEXPRESS',
    database: 'GDA00446-OT-EmmaMaldonado',
    options: {
        encrypt: true,
        trustServerCertificate: true,  
    },
    connectionTimeout: 30000,
};

// Intentar realizar una conexión
sql.connect(dbConfig)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.error('Error de conexión:', err);
  });

export default dbConfig;