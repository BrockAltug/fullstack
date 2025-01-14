# MERN Decode JWT Authentication

## Overview

This project demonstrates a **JWT-based Authentication System** using the MERN stack. The authentication system utilizes the `jwt-decode` library to decode JSON Web Tokens (JWT), validate session states, and handle user authentication.

---

## Key Features

1. **JWT Decoding**:

   - Decodes JWT tokens to extract user profile information and expiration data.

2. **Session Management**:

   - Verifies user login state by checking token validity and expiration.
   - Automatically removes expired tokens from local storage.

3. **User Authentication**:

   - Provides secure token storage during login.
   - Automatically redirects users to the home page after login.
   - Ensures secure logout by clearing tokens and reloading the application.

4. **Utility Class Design**:
   - Encapsulates authentication logic in a reusable `AuthService` class.

---

## Concepts Covered

1. **Token Decoding**:

   - Extracts and parses token payload using the `jwt-decode` library.

2. **Authentication State Handling**:

   - Implements utility methods (`loggedIn`, `isTokenExpired`, etc.) for managing user session states.

3. **Local Storage Usage**:

   - Securely stores and retrieves the token from the browser's local storage.

4. **Application Navigation**:
   - Redirects users upon login/logout events using `window.location`.

---

## Installation and Usage

1. **Install Dependencies**:
   Run the following command to install the required Node.js package:

   ```bash
   npm install jwt-decode
   ```

2. **Implementation**:

   - Use the `AuthService` class as a singleton for managing user authentication states.

   Example:

   ```javascript
   import AuthService from "./utils/auth";

   if (AuthService.loggedIn()) {
     const userProfile = AuthService.getProfile();
     console.log("Logged-in user:", userProfile);
   } else {
     console.log("User not logged in.");
   }
   ```

3. **Run the Application**:
   Ensure your MERN application is running locally:
   ```bash
   npm start
   ```

---

## Summary

This project provides a streamlined way to manage user authentication in a MERN stack application. By leveraging `jwt-decode`, the application ensures token-based authentication, with features like session verification, token expiration handling, and secure login/logout flows.

---

## Resources

- [jwt-decode Library Documentation](https://www.npmjs.com/package/jwt-decode)
- [MERN Stack Documentation](https://mern.io/)
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
