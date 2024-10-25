DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
  id INTEGER NOT NULL,                     -- Assigns a integer to each row, cannot be NULL
  first_name VARCHAR(50) NOT NULL,         -- Limits to strings of up to 50 characters, cannot be NULL
  last_name VARCHAR(50) NOT NULL,          -- Limits to strings of up to 50 characters, cannot be NULL
  value_card_member BOOLEAN DEFAULT FALSE  -- Accepts TRUE or FALSE, defaults to FALSE
);