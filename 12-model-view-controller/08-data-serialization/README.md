
# MVC with Data Serialization: Dynamic Dish Menu

## Overview

This project demonstrates the **data serialization** process within the **Model-View-Controller (MVC)** architecture. By serializing data retrieved from a Sequelize model, the application renders dynamic content using Handlebars.js templates. The application displays a menu with dishes and details dynamically populated from a database.

---

## Key Features

1. **Data Serialization**:
   - Serializes Sequelize model data into plain objects using `.get({ plain: true })`.

2. **Dynamic Rendering**:
   - Uses Handlebars.js templates to display serialized data.

3. **RESTful API**:
   - Provides endpoints to retrieve all dishes or a single dish.

4. **Database Seeding**:
   - Seeds the database with predefined dish data for development and testing.

---

## Concepts Covered

1. **Data Serialization**:
   - Converts complex Sequelize objects into plain JavaScript objects for easier rendering.

2. **Handlebars.js Integration**:
   - Dynamically generates HTML based on serialized data.

3. **MVC Framework**:
   - Separates data handling (Model), business logic (Controller), and presentation (View).

---

## Application Structure

### **Files and Functionality**

1. **`controllers/dish-routes.js`**:
   - Handles routes to retrieve all dishes or a single dish.
   - Serializes data before rendering templates.

2. **`views/all.handlebars`**:
   - Template for rendering all dishes in the menu.
   - Displays each dish's name, ID, and guest information.

3. **`views/dish.handlebars`**:
   - Template for rendering a single dish with detailed information.

4. **`db/schema.sql`**:
   - Defines the database schema.

5. **`seeds/index.js`**:
   - Seeds the database with predefined dish data.

6. **`seeds/dish-seeds.json`**:
   - Contains sample data for dishes, including names, descriptions, and guest information.

7. **`server.js`**:
   - Sets up the Express server, configures Handlebars.js, and connects to the database.

---

## Example Usage

### **All Dishes Route**

1. **Route**:
   - `GET /`

2. **Serialized Data**:
   - Example data passed to `views/all.handlebars`:
     ```json
     [
       {
         "id": 1,
         "dish_name": "French Bread with Brie Cheese",
         "guest_name": "Ivan"
       },
       {
         "id": 2,
         "dish_name": "Cheese Plate with Spanish Chorizo",
         "guest_name": "Isa"
       }
     ]
     ```

3. **Rendered Template**:
   ```html
   <div class="menu-container">
     <div class="card-header col-md-10">
       <h2>&#127869 Current Menu</h2>
     </div>
     <div class="dish col-md-5">
       <p>1. French Bread with Brie Cheese</p>
     </div>
     <div class="col-md-7">
       <p>Guest: Ivan</p>
     </div>
     <div class="dish col-md-5">
       <p>2. Cheese Plate with Spanish Chorizo</p>
     </div>
     <div class="col-md-7">
       <p>Guest: Isa</p>
     </div>
   </div>
   ```

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

3. **Seed the Database**:
   - Run the seeding script to populate the database with sample data:
     ```bash
     node seeds/index.js
     ```

4. **Run the Application**:
   - Start the server:
     ```bash
     npm start
     ```

5. **Access the Application**:
   - Open your browser and navigate to:
     ```
     http://localhost:3001/
     ```

---

## Summary

This project demonstrates how to serialize Sequelize model data and dynamically render it using Handlebars.js within the MVC framework. The implementation separates data handling, logic, and presentation, ensuring a maintainable and scalable architecture.
