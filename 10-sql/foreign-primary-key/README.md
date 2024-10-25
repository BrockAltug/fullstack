# PostgreSQL Foreign and Primary Key Schema Setup

## Concepts Covered

- Database Creation and Management
- Understanding Foreign and Primary Keys
- Defining Relationships Between Tables

## Learning Objectives

1. Learn how to create a PostgreSQL database and tables with primary and foreign key constraints.
2. Understand the significance of primary keys for uniquely identifying records.
3. Practice setting up foreign keys to establish relationships between tables.

## Schema Setup Instructions

### Step 1: Drop Existing Database

Begin by dropping the database if it exists, and then create a new database named `customers_db`. This ensures that you start with a clean environment.

### Step 2: Connect to the New Database

After creating `customers_db`, connect to it to execute further SQL commands.

### Step 3: Create the Customers Table

Define the structure of the `customers` table, which includes:

- `id`: A unique identifier for each customer, defined as a `SERIAL PRIMARY KEY`.
- `first_name`: A string field for the customer's first name that cannot be null.
- `last_name`: A string field for the customer's last name that cannot be null.

### Step 4: Create the Customer Orders Table

Define the structure of the `customer_orders` table, which includes:

- `id`: A unique identifier for each order, defined as a `SERIAL PRIMARY KEY`.
- `customer_id`: An integer field that references the `id` of the `customers` table, establishing a relationship.
- `order_details`: A text field to store details about the customer's order.

### Foreign Key Constraint

The `customer_id` field in the `customer_orders` table is defined as a foreign key that references the `id` field of the `customers` table. This ensures referential integrity between the two tables. If a customer is deleted from the `customers` table, the corresponding `customer_id` in the `customer_orders` table will be set to NULL.

## Summary

This guide demonstrates how to set up a PostgreSQL database with tables that utilize foreign and primary key relationships. By establishing these relationships, you can maintain data integrity and ensure that your database schema supports logical connections between different entities, such as customers and their orders. Understanding and implementing foreign and primary keys is fundamental for designing relational databases effectively.
