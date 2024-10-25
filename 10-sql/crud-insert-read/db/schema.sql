-- this drops the database if it exists
DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
-- this is creating a database called books_db
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
--this connects to the database books_db
\c books_db;

-- TODO: What is the SQL code below doing?
--this creats a table for the database
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  -- this is creating a column called id that is an integer and cannot be null
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  --this is creating a column called name that is a string and cannot be null
  name VARCHAR(100) NOT NULL
);

