# MVC Review

## Overview

This project demonstrates the implementation of the Model-View-Controller (MVC) architecture by rendering a dynamic list of users. It highlights how models, views, and controllers work together to process data, manage logic, and render templates.

---

## Key Features

1. **Dynamic User Rendering**:

   - Displays a list of users fetched from the database and rendered dynamically using Handlebars.js.

2. **MVC Architecture**:

   - Separates concerns into Models, Views, and Controllers to organize application logic and data handling.

3. **User Data Management**:

   - Fetches user data from a PostgreSQL database, excludes sensitive information like passwords, and sorts users alphabetically.

4. **Template Rendering**:

   - Utilizes Handlebars.js to loop through user data and display it in a structured and readable format.

5. **Helper Functions**:
   - Integrates custom Handlebars.js helpers to add dynamic functionality to the templates.

---

## Concepts Covered

1. **Model-View-Controller (MVC)**:

   - Understand the separation of concerns into:
     - **Models**: Represent the data and business logic.
     - **Views**: Render user interfaces using templates.
     - **Controllers**: Handle requests, process data, and return responses.

2. **Database Queries with Sequelize**:

   - Learn how to query data from a PostgreSQL database and process it for use in templates.

3. **Template Engines**:

   - Use Handlebars.js to dynamically render data in HTML templates.

4. **Dynamic Data Rendering**:

   - Iterate over arrays of objects to render lists of data.

5. **Custom Helpers**:
   - Extend Handlebars.js functionality with custom helpers for dynamic content.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run `npm install` to set up the project and install required packages.

2. **Set Up Environment Variables**:

   - Create a `.env` file with the following variables:
     ```
     DB_NAME=your_database_name
     DB_USER=your_username
     DB_PASSWORD=your_password
     PORT=3001
     ```

3. **Seed the Database**:

   - Populate the database with sample user data:
     ```bash
     node seeds/index.js
     ```

4. **Run the Application**:

   - Start the server:
     ```bash
     npm start
     ```

5. **Access the Application**:
   - Open [http://localhost:3001](http://localhost:3001) to interact with the application.

---

## Expected Behavior

1. Users are displayed in alphabetical order by name.
2. The email addresses of users are clickable mailto links.
3. Templates dynamically render data using Handlebars.js loops and expressions.
4. Sensitive data like passwords is excluded from the rendered output.

---

## Summary

This project provides a comprehensive review of the MVC architecture by integrating user data with dynamic templates. It showcases best practices for organizing code, fetching and processing data, and rendering dynamic user interfaces.
