const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'library_db',
  'postgres',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
