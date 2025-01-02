DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- Main table for businesses with location_id as a foreign key
CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
);

-- Table to store unique location details
CREATE TABLE locations (
    location_id INTEGER PRIMARY KEY,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
);