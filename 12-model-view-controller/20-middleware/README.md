# MVC Middleware Implementation

## Overview

This project demonstrates the use of custom middleware in an MVC architecture to enforce authentication and enhance security. The middleware ensures that users can only access certain routes if they are logged in, redirecting unauthorized users to the login page.

---

## Key Features

1. **Custom Middleware**:

   - Implements a middleware function (`withAuth`) to restrict access to specific routes based on user authentication.

2. **Dynamic Route Protection**:

   - Applies middleware to routes like `/gallery/:id` and `/painting/:id` to ensure only logged-in users can access them.

3. **MVC Architecture**:

   - Organizes application logic into Models, Views, and Controllers while integrating middleware seamlessly.

4. **Session-Based Authentication**:

   - Tracks user authentication status using session variables.

5. **Conditional Rendering**:
   - Displays different content in templates based on whether the user is logged in.

---

## Concepts Covered

1. **Middleware in Express**:

   - Learn how to create and use custom middleware functions to enhance route functionality.

2. **Route Protection**:

   - Explore how middleware is used to protect sensitive routes from unauthorized access.

3. **Conditional Rendering in Handlebars**:

   - Use session variables to dynamically render content based on user authentication.

4. **Seamless Integration**:

   - Understand how middleware fits into an MVC architecture without disrupting separation of concerns.

5. **User Authentication Workflow**:
   - Ensure users are redirected to the login page if not authenticated, maintaining a secure application flow.

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

   - Use the provided seed script to populate the database:
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

1. Users attempting to access protected routes without logging in are redirected to the login page.
2. Once logged in, users can view gallery and painting details by accessing protected routes.
3. Middleware is seamlessly integrated into the MVC framework to enforce authentication.

---

## Summary

This project demonstrates the importance of middleware in an MVC architecture for securing routes and enforcing authentication. By combining custom middleware with session-based authentication, the application ensures a secure and user-friendly experience.
