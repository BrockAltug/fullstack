const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    edition: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_paperback: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'book', // Use singular name for the table
    freezeTableName: true // Prevent Sequelize from pluralizing the table name
  }
);

module.exports = Book;