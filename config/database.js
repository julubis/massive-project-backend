import { Sequelize } from 'sequelize';

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  },
  dialect: process.env.DB_DIALECT,
});

db.authenticate()
  .then(_ => console.log('Database connected'))
  .catch(error => console.error('Database error:', error));

export default db;