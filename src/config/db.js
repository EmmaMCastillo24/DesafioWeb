import { Sequelize } from 'sequelize';

const dbConfig = {
    username: 'sa',
    password: '12345678',
    database: 'GDA00446-OT-EmmaMaldonado',
    host: 'EMMA-CASTILLO\\SQLEXPRESS',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true,
        trustServerCertificate: true,  
    },
    pool: {
      max: 5,  
      min: 0, 
      acquire: 30000, 
      idle: 10000,  
    },
    logging: false, 
  };
  
  const sequelize = new Sequelize(dbConfig);
  
  export default sequelize;