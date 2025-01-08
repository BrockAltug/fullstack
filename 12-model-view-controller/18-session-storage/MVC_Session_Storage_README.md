# MVC Session Storage with Sequelize and Express

## Overview

This project demonstrates the implementation of session storage using `express-session` and `connect-session-sequelize` for managing user sessions in an MVC application. By integrating Sequelize with a session store, user data can be securely maintained across requests.

---

## Key Features

1. **Session Storage**:

   - Uses `express-session` with `connect-session-sequelize` to store session data in the database.

2. **Database Integration**:

   - Session data is persisted in a PostgreSQL database using Sequelize.

3. **Secure Session Management**:

   - Configures session options, including cookie expiration, HTTP-only cookies, and strict same-site policies for enhanced security.

4. **MVC Architecture**:

   - Separates application logic into Models, Views, and Controllers for scalability and maintainability.

5. **Environment Variables**:
   - Uses `dotenv` for secure storage of database credentials and configuration settings.

---

## Concepts Covered

1. **Sequelize Session Store**:

   - Learn how to set up a session store backed by Sequelize to persist user sessions.

2. **Secure Cookie Management**:

   - Understand how to configure session cookies for secure and reliable authentication.

3. **Environment Variables**:

   - Use environment variables to securely manage sensitive data like database credentials.

4. **MVC Integration**:
   - Implement session storage in an MVC architecture without disrupting the separation of concerns.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run `npm install` to install all required dependencies.

2. **Set Up Environment Variables**:

   - Create a `.env` file with the following variables:
     ```
     DB_NAME=your_database_name
     DB_USER=your_username
     DB_PASSWORD=your_password
     PORT=3001
     ```

3. **Seed the Database**:

   - Run the seeds:
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

1. Sessions are securely stored in the database and persist across server restarts.
2. Cookies are managed according to the specified options, including expiration and HTTP-only policies.
3. User authentication and session tracking are integrated into the MVC workflow.

---

## Summary

This project showcases how to implement session storage in an MVC architecture using `express-session` and `connect-session-sequelize`. It highlights best practices for session security, cookie management, and integrating session persistence with Sequelize and PostgreSQL.
