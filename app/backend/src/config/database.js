import 'dotenv/config';
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('USER_CALENDAR', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: 'USER_CALENDAR',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = {
  sequelize,
  config,
};
