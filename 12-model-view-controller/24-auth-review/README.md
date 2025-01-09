# MVC Auth Review

## Overview

This project demonstrates the implementation of authentication using **Express**, **Sequelize**, and **session management**. It highlights how authentication works with user login, session handling, and route protection, all within an organized Model-View-Controller (MVC) architecture.

---

## Key Features

1. **User Authentication**:

   - Implements secure user login with password validation using Sequelize models.
   - Manages user sessions to keep track of authenticated users.

2. **Session Handling**:

   - Utilizes `express-session` and `connect-session-sequelize` to store session data in the database.

3. **Protected Routes**:

   - Restricts access to specific routes using middleware to check user authentication status.

4. **Dynamic Rendering**:

   - Displays user-specific content on pages using session-based data.

5. **Modular MVC Architecture**:

   - Organizes code into **Models**, **Views**, and **Controllers** for better scalability and maintainability.

---

## Concepts Covered

1. **Authentication Flow**:

   - Learn how to verify user credentials and create secure sessions using Sequelize models and middleware.

2. **Session Management**:

   - Implement persistent user sessions with `express-session` and store them in a database using `connect-session-sequelize`.

3. **Middleware for Route Protection**:

   - Understand the use of custom middleware to enforce authentication on protected routes.

4. **Template Rendering with Handlebars**:

   - Use Handlebars.js to dynamically display content based on session data.

5. **Sequelize Model Integration**:

   - Define and interact with user models, including custom instance methods for password validation.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run the following command to set up the project and install required packages:
     ```bash
     npm install
     ```

2. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory with the following variables:
     ```
     DB_NAME=your_database_name
     DB_USER=your_username
     DB_PASSWORD=your_password
     PORT=3001
     SESSION_SECRET=your_secret_key
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

   - Open [http://localhost:3001](http://localhost:3001) in your browser to interact with the application.

---

## Expected Behavior

1. Users can log in with valid credentials.
2. After logging in, users are redirected to the homepage, and their session is stored in the database.
3. Logged-in users can access protected routes and content.
4. Clicking the "Logout" button ends the user's session and redirects them to the login page.
5. Unauthenticated users attempting to access protected routes are redirected to the login page.

---

## Summary

This project provides a practical example of implementing user authentication and session management. It showcases best practices for creating secure and scalable authentication systems using modern web development tools. By organizing code into an MVC architecture, it ensures maintainability and separation of concerns, making it easier to extend and manage.
