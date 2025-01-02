# Database Normalization Project

## Project Overview

This project demonstrates the process of normalizing a database from First Normal Form (1NF) to Third Normal Form (3NF). By decomposing tables, we aim to reduce redundancy, enforce data integrity, and improve query efficiency. In this project, we start with a `businesses` table in 1NF and convert it to 3NF by restructuring the database schema and ensuring appropriate relationships with foreign keys.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Requirements](#project-requirements)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [Data Insertion](#data-insertion)
- [Retrieving Data](#retrieving-data)
- [Technical Notes](#technical-notes)

## Project Requirements

- PostgreSQL
- SQL knowledge, specifically in normalization techniques and foreign key constraints

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Run SQL Scripts**: The project contains two SQL scripts to set up the database and insert data.

   - **Create and Normalize Database Schema**:
     Run `schema.sql` to create the database, tables, and relationships in 3NF.

     ```bash
     psql -U <username> -f schema.sql
     ```

   - **Insert Sample Data**:
     Run `seeds.sql` to insert initial data into the normalized tables.
     ```bash
     psql -U <username> -f seeds.sql
     ```

## Database Schema

The database consists of two tables normalized to 3NF:

1. **`businesses`**:

   - `business_id`: Unique identifier for each business.
   - `business_name`: Name of the business.
   - `location_id`: Foreign key referencing `locations`.

2. **`locations`**:
   - `location_id`: Unique identifier for each location.
   - `location_name`: Name and address of the location.
   - `location_manager`: Name of the location manager.

By separating business and location data into distinct tables, we remove redundancies and transitive dependencies, ensuring a clean and efficient schema.

## Data Insertion

Use `seeds.sql` to populate the tables with sample data for testing and querying purposes.

Example data:

```sql
-- Insert data into locations
INSERT INTO locations (location_id, location_name, location_manager) VALUES
(101, 'Annapolis, MD', 'Rita Ivanov'),
(102, 'Los Angeles, CA', 'Aaron Kamara'),
(103, 'Lincoln, NB', 'Farahd Mohamed'),
(104, 'Saskatchewan, CA', 'Amara Marquez');

-- Insert data into businesses
INSERT INTO businesses (business_id, business_name, location_id) VALUES
(1, 'Prosser Lankovitch Products', 101),
(2, 'Ripley Enterprises', 102),
(3, 'Gormenghast, Inc.', 103),
(4, 'Nullhammer Corporation', 104);
```

## Retrieving Data

To retrieve information from the database in a format similar to the original 1NF table, use the following SQL JOIN query:

```sql
SELECT
    b.business_id,
    b.business_name,
    l.location_id,
    l.location_name,
    l.location_manager
FROM
    businesses b
JOIN
    locations l ON b.location_id = l.location_id;
```

## Technical Notes

1. **Normalization Process**: This project illustrates how to move from 1NF to 3NF, focusing on eliminating repeating groups, ensuring every attribute is fully functionally dependent on the primary key, and removing transitive dependencies.
2. **Foreign Key Constraints**: We ensure referential integrity between the `businesses` and `locations` tables by using `location_id` as a foreign key in the `businesses` table, which references `locations`.

3. **Data Integrity**: The decomposed schema ensures that any changes to location data only need to occur in one table (`locations`), making the system more robust and easier to maintain.
