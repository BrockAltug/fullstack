DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --

--  Delete the existing table (if it exists)
DROP TABLE IF EXISTS biographies;

--  Create the new table with the specified columns
CREATE TABLE biographies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
