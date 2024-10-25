# PostgreSQL Schema and Seed Data Setup for Grocery Database

## Concepts Covered

- Database Creation and Management
- Table Structure Definition
- Inserting Seed Data into Tables

## Learning Objectives

1. Understand how to create a PostgreSQL database and define a table structure.
2. Learn how to insert seed data into tables to populate the database with initial values.
3. Practice ensuring data integrity through appropriate data types and constraints.

## Schema Setup Instructions

### Step 1: Drop Existing Database

Begin by dropping the database if it exists, and then create a new database named `grocery_db`. This ensures you start with a clean slate.

### Step 2: Connect to the New Database

After creating `grocery_db`, connect to it to execute further SQL commands.

### Step 3: Create the Products Table

Define the structure of the `products` table, which includes:

- `id`: An integer that uniquely identifies each product. This field cannot be NULL.
- `product_name`: A string field limited to 30 characters for storing the name of the product. This field cannot be NULL.
- `category_name`: A string field limited to 30 characters for storing the category of the product. This field cannot be NULL.

### Step 4: Insert Seed Data into the Products Table

Populate the `products` table with initial data using the following values:

- Product ID: 1, Product Name: 'spinach', Category Name: 'produce'
- Product ID: 2, Product Name: 'peanut butter', Category Name: 'staples'
- Product ID: 3, Product Name: 'peas-canned', Category Name: 'canned goods'
- Product ID: 4, Product Name: 'ice cream', Category Name: 'frozen'
- Product ID: 5, Product Name: 'potato chips', Category Name: 'snacks'

## Summary

This guide provides a comprehensive overview of creating and managing a PostgreSQL database for grocery items. It covers the steps necessary to define a table structure for storing product information and how to insert seed data for initial population. By following these steps, you can effectively set up a grocery database that supports easy access and management of product data.
