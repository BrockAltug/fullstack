# Handlebars Project: Custom Helpers in MVC Architecture

## Overview

This project demonstrates the implementation of custom Handlebars helpers to format data dynamically within an MVC architecture. It integrates Sequelize for data management, Express for routing, and Handlebars for rendering templates. The project uses PostgreSQL as the database.

---

## Key Features

1. **Custom Helpers**:
   - Defines reusable helper functions, such as `format_date` and `format_time`, to manipulate and format data for display.

2. **Dynamic Rendering**:
   - Templates dynamically render formatted dates and times using custom helpers.

3. **MVC Architecture**:
   - Organizes the application into Models, Views, and Controllers for scalability and maintainability.

4. **PostgreSQL Integration**:
   - Uses Sequelize to connect to a PostgreSQL database for data management.

5. **Reusable Layouts**:
   - Utilizes a main Handlebars layout for consistent structure across views.

---

## Concepts Covered

1. **Custom Handlebars Helpers**:
   - Learn how to create and register custom helpers for formatting data.

2. **Sequelize Models and Queries**:
   - Retrieve and manipulate data from a PostgreSQL database to pass to Handlebars templates.

3. **Dynamic Data Binding**:
   - Use helpers to format and bind data dynamically within templates.

4. **Reusable Layouts**:
   - Create a consistent layout using Handlebars `layouts` and `body` placeholders.

5. **Routing in MVC**:
   - Build RESTful routes to serve dynamic data and render views.

---

## Setup Instructions

1. **Install Dependencies**:
   - Run `npm install` to set up the project and install required packages.

2. **Set Up the Database**:
   - Create the PostgreSQL database and tables using Sequelize migrations or schema files:
     ```bash
     psql -U postgres -d your_database_name -f db/schema.sql
     ```

3. **Configure Database Connection**:
   - Update the `config/connection.js` file with your PostgreSQL credentials.

4. **Run the Application**:
   - Start the application:
     ```bash
     npm start
     ```

5. **View the Application**:
   - Open [http://localhost:3001](http://localhost:3001) in your browser to explore formatted gallery and painting data.

---

## Expected Behavior

1. Dates displayed in templates are dynamically formatted using the `format_date` helper.
2. Time values are formatted and displayed using the `format_time` helper.
3. Galleries and paintings are rendered dynamically based on the data retrieved from the PostgreSQL database.

---

## Summary

This project demonstrates how to enhance Handlebars templates with custom helpers, making data presentation more flexible and user-friendly. It showcases the integration of Handlebars with Sequelize and Express in an MVC architecture while leveraging PostgreSQL for robust data storage.
