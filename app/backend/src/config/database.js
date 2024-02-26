const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  },
);

const config = {
  username: process.env.MYSQLUSER,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS || '123456',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.DB_NAME,
  // host: process.env.DB_HOST || 'localhost',
  host: process.env.MYSQLHOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  sequelize,
  config,
};
