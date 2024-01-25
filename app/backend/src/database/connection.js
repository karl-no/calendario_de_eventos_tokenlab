import mysql from 'mysql2/promise';
// eslint-disable-next-line import/no-cycle
import { executeQueries, readQueries } from './queryUtils';

const conn = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  port: Number(process.env.MYSQLPORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
});

if (['dev', 'development'].includes(process.env.NODE_ENV || 'development')) {
  const dropDatabase = readQueries('dropDatabase.sql');
  executeQueries(conn, dropDatabase).then(() => executeQueries(conn));
}

export default conn;
