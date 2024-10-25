# PostgreSQL Data Types Schema Setup

## Concepts Covered

- Understanding SQL Data Types
- Creating Tables with Various Data Types
- Ensuring Data Integrity with Constraints

## Learning Objectives

1. Learn how to create a PostgreSQL database and define tables using different data types.
2. Understand the significance of using appropriate data types for various fields.
3. Practice defining constraints to ensure data integrity within the database.

## Schema Setup Instructions

### Step 1: Drop Existing Database

Start by dropping the database if it exists, and then create a new database named `customer_db`. This ensures a clean slate for your new setup.

### Step 2: Connect to the New Database

After creating `customer_db`, connect to it to execute further SQL commands.

### Step 3: Create the Customers Table

Define the structure of the `customers` table, which includes various data types and constraints:

- `id`: An integer that uniquely identifies each customer. This field cannot be NULL.
- `first_name`: A string field limited to 50 characters for storing the customer's first name. This field cannot be NULL.
- `last_name`: A string field limited to 50 characters for storing the customer's last name. This field cannot be NULL.
- `value_card_member`: A boolean field that indicates whether the customer is a member of a value card program. This field accepts TRUE or FALSE and defaults to FALSE.

## Summary

This guide demonstrates how to set up a PostgreSQL database using different data types to effectively manage customer information. By defining appropriate data types and constraints, you ensure that your database maintains data integrity and accurately reflects the characteristics of the data being stored. Understanding and utilizing data types is essential for effective database design and management.
