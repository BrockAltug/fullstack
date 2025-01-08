# Handlebars Frontend Logic Dish Management System

## Overview

This project showcases the use of Handlebars for rendering dynamic frontend templates, Sequelize for database interaction, and Express for handling server-side functionality. The Dish Management System allows users to add, update, and display dishes, following the MVC architecture.

---

## Key Features

1. **Dynamic Templating**:

   - Handlebars templates render dish data dynamically on the frontend, with conditional rendering for attributes like `has_nuts`.

2. **MVC Architecture**:

   - Implements the Model-View-Controller (MVC) paradigm, separating concerns for scalability and maintainability.

3. **Sequelize ORM**:

   - Manages database operations for dishes, including creation and updates.

4. **Interactive Forms**:

   - Provides forms for adding and editing dishes, integrated with frontend logic and backend routes.

5. **Dynamic Client-Side Logic**:
   - Uses JavaScript to handle user interactions and send API requests.

---

## Concepts Covered

1. **Model-View-Controller (MVC)**:

   - Separate application logic into Models, Views, and Controllers for clear organization.

2. **Handlebars Views**:

   - Use Handlebars for dynamic rendering of HTML templates based on data and state.

3. **Sequelize Models**:

   - Define data structures and manage interactions with the database.

4. **RESTful Routes**:

   - Build RESTful API endpoints for creating and updating dishes.

5. **Frontend and Backend Integration**:
   - Implement fetch requests in JavaScript to send data between the client and server.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run `npm install` to set up the project and install required packages.

2. **Set Up the Database**:

   - Create the database and tables:
     ```bash
     psql -U
     ```

3. **Seed the Database**:

   - Seed the database with sample data:
     ```bash
     node seeds/index.js
     ```

4. **Run the Application**:

   - Start the application:
     ```bash
     npm start
     ```

5. **View the Application**:
   - Open [http://localhost:3001](http://localhost:3001) in your browser to interact with the application.

---

## Expected Behavior

1. Users can add new dishes through a form, with data saved in the database.
2. Existing dishes can be edited using the provided form, and changes are reflected dynamically.
3. Dish information is displayed using Handlebars templates.
4. Conditional rendering displays attributes such as `has_nuts` based on the dish data.

---

## Summary

This project demonstrates the power of Handlebars for building dynamic and interactive web applications. It integrates Handlebars with Sequelize and Express, adhering to the MVC architecture to ensure a clean and maintainable codebase.
