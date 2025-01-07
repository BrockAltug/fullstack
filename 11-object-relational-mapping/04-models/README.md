# ORM and Sequelize Model Configuration

## Concepts Covered

- Understanding ORM (Object-Relational Mapping)
- Customizing Sequelize Models for Database Alignment
- Managing Table Names and Primary Key Naming Conventions
- Syncing Models with PostgreSQL

## Learning Objectives

1. Understand the purpose of ORM in bridging the gap between relational databases and programming languages.
2. Learn how to customize Sequelize models to meet specific database design requirements.
3. Practice configuring Sequelize options to control table names, primary keys, and column naming conventions.
4. Explore how Sequelize syncs models with a PostgreSQL database.

## Summary

This guide focuses on configuring Sequelize models to align with database design requirements. By default, Sequelize pluralizes table names and uses `id` as the primary key, which may not align with your database schema conventions. This tutorial demonstrates:

1. **Freezing Table Names**: Prevent Sequelize from pluralizing table names using `freezeTableName: true`.
2. **Custom Primary Keys**: Replace default primary keys (`id`) with descriptive names (e.g., `book_id`) for clarity.
3. **Underscored Naming**: Use the `underscored: true` option for consistent field naming in snake_case.

## Key Features of Sequelize Configuration

- **Table Name Control**: The `freezeTableName` option allows you to enforce singular table names, ensuring alignment with model names.
- **Descriptive Primary Keys**: Custom primary key names such as `book_id` improve readability and make database design more intuitive.
- **Snake_Case Naming**: The `underscored` option enforces snake_case naming for all columns, ensuring consistency with typical SQL conventions.

## Verification

1. Start your server and sync the models using `sequelize.sync()`.
2. Access your PostgreSQL database via the terminal:
   - Use the `\d` command to describe the table and confirm the changes (e.g., `\d book;`).
3. Verify that the primary key is named `book_id` and that the table name is singular.

By following this guide, you will ensure your Sequelize models are optimized for readability, maintainability, and alignment with your PostgreSQL database schema.
