import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
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