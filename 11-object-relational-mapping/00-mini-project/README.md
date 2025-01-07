# ORM Mini Project: Traveller API

## Overview

This project implements a RESTful API for managing travellers, locations, and trips. Using **Sequelize ORM**, it establishes many-to-many relationships between `Traveller` and `Location` through the `Trip` model. The API enables travellers to manage their trips and associated data, with functionality to view, create, and delete records.

---

## Key Features

1. **RESTful API**:

   - Provides endpoints to manage travellers, locations, and trips.

2. **Many-to-Many Relationships**:

   - Establishes many-to-many associations between `Traveller` and `Location` models via the `Trip` model.

3. **Database Integration**:

   - Uses PostgreSQL with Sequelize for database management and relationships.

4. **Deployed API**:
   - Supports deployment to **Render** with a PostgreSQL database.

---

## Models and Relationships

### **Models**

1. **`Traveller`**:

   - Fields: `id`, `name`, `email`
   - Relationships: Many-to-Many with `Location` through `Trip`.

2. **`Location`**:

   - Fields: `id`, `name`
   - Relationships: Many-to-Many with `Traveller` through `Trip`.

3. **`Trip`**:
   - Fields: `id`, `trip_budget`, `traveller_amount`, `traveller_id`, `location_id`
   - Relationships: Connects `Traveller` and `Location`.

### **Relationships**

- Travellers have many Locations through Trips.
- Locations have many Travellers through Trips.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up the Database**:

   - Ensure PostgreSQL is installed and running.
   - Create the database using the provided schema:
     ```bash
     psql -U <username> -f db/schema.sql
     ```

3. **Environment Configuration**:

   - Create a `.env` file with the following:
     ```env
     DB_NAME=traveller_db
     DB_USER=<your_username>
     DB_PASSWORD=<your_password>
     ```

4. **Run the Application**:

   - Start the server:
     ```bash
     npm start
     ```

5. **Seed the Database**:
   - Optionally use seed data to populate the database for testing.

---

## API Endpoints

### **Traveller Routes**

1. **GET `/api/travellers`**:

   - Retrieves all travellers without associated trips.

2. **POST `/api/travellers`**:

   - Creates a new traveller.
   - Example Body:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com"
     }
     ```

3. **GET `/api/travellers/:id`**:

   - Retrieves a single traveller with associated trips and locations.

4. **DELETE `/api/travellers/:id`**:
   - Deletes a traveller and their associated trips.

### **Location Routes**

1. **GET `/api/locations`**:

   - Retrieves all locations.

2. **POST `/api/locations`**:

   - Creates a new location.
   - Example Body:
     ```json
     {
       "name": "Paris"
     }
     ```

3. **GET `/api/locations/:id`**:

   - Retrieves a single location with associated trips.

4. **DELETE `/api/locations/:id`**:
   - Deletes a location and its associated trips.

### **Trip Routes**

1. **POST `/api/trips`**:

   - Creates a trip between a traveller and a location.
   - Example Body:
     ```json
     {
       "trip_budget": 2000.5,
       "traveller_amount": 6,
       "traveller_id": 1,
       "location_id": 2
     }
     ```

2. **DELETE `/api/trips/:id`**:
   - Deletes a trip.

---

## Acceptance Criteria

- The API supports the following functionalities:
  - Travellers can:
    - Create an account.
    - Create a new trip with an existing location.
    - View all trips with associated locations.
  - Locations can be created and viewed.
  - Trips can be created and deleted.

---

## Deployment

- The API can be deployed to **Render** with a PostgreSQL database.
- Refer to [Render's Deployment Guide](https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql) for detailed steps.

---

## 📝 Notes

- Use the provided `schema.sql` file to set up the database structure.
- Seed data can be used to populate the database for development and testing.
- Ensure the `unique` flag is set to `false` for many-to-many associations to avoid SQL errors.

---

## 🏆 Bonus Features

1. Add validations to model fields.
2. Implement password hashing and login functionality for travellers.
3. Set up a **super many-to-many relationship** for advanced querying between `Traveller`, `Location`, and `Trip`.

---

## Resources

- [Sequelize Documentation](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships)
- [Guide to Deploying with Render](https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql)
