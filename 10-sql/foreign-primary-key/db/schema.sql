-- Drop the database if it exists and create a new one
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

-- Connect to the new database
\c customers_db;

-- Create the customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create the customer_orders table
CREATE TABLE customer_orders (
    id SERIAL PRIMARY KEY,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE SET NULL
);