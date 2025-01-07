require('dotenv').config(); // Load environment variables from .env file
const Sequelize = require('sequelize');

// Use environment variables for database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name
  process.env.DB_USER,      // Database user
  process.env.DB_PASSWORD,  // Database password
  {
    host: process.env.DB_HOST || 'localhost', // Database host (default: localhost)
    dialect: 'postgres',                      // Database dialect
    port: process.env.DB_PORT || 5432         // Database port (default: 5432)
  }
);

module.exports = sequelize;