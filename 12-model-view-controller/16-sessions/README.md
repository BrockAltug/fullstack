# Handlebars User Sessions in MVC Architecture

## Overview

This project demonstrates the implementation of user authentication and session management in an MVC architecture. Using Handlebars for templating, Sequelize for database interaction, and Express for routing, it highlights how to manage user sessions securely to enable personalized content rendering.

---

## Key Features

1. **Session Management**:

   - Implements user authentication and session variables, such as `loggedIn`, to track the user's login status.

2. **Dynamic Content Rendering**:

   - Displays personalized content based on the user's session state using Handlebars conditionals.

3. **RESTful API**:

   - Provides API routes for user registration, login, and logout with secure session handling.

4. **MVC Architecture**:

   - Organizes the application into Models, Views, and Controllers for scalability and maintainability.

5. **Secure Password Validation**:
   - Uses Sequelize model methods to securely validate user credentials.

---

## Concepts Covered

1. **Session Variables**:

   - Learn how to manage session variables to track user state across the application.

2. **Conditionals in Handlebars**:

   - Use Handlebars helpers like `#if` and `#else` to conditionally render content based on the session state.

3. **Sequelize Models**:

   - Use Sequelize models for secure password hashing and validation.

4. **Dynamic Routes and Views**:

   - Create routes that serve different views or responses based on the user's session status.

5. **Authentication Workflow**:
   - Explore the complete user authentication flow, from registration to login and logout.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run `npm install` to set up the project and install required packages.

2. **Set Up the Database**:

   - Create the PostgreSQL database and tables using Sequelize migrations or schema files:
     ```bash
     psql -U postgres -d your_database_name -f db/schema.sql
     ```

3. **Configure Session Handling**:

   - Ensure the session configuration is set up in the `server.js` file using a session store like `express-session`.

4. **Run the Application**:

   - Start the application:
     ```bash
     npm start
     ```

5. **View the Application**:
   - Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## Expected Behavior

1. Users can register, log in, and log out using the provided routes.
2. Content on pages like galleries and paintings is displayed only if the user is logged in.
3. If not logged in, users are redirected to the login page with appropriate links provided.

---

## Summary

This project showcases how to implement user sessions and authentication in an MVC framework. By combining Handlebars, Sequelize, and Express, it ensures a secure and user-friendly application structure.
