
# User Routes and Home Routes in Express with Sessions

## Concepts Covered
- User registration and login functionality
- Managing user sessions with Express
- Dynamic rendering of galleries and paintings

## Learning Objectives
1. Understand how to create routes for user registration and login in an Express application.
2. Learn how to manage user sessions using Express session middleware.
3. Practice rendering dynamic content using Handlebars templates based on user session state.

## User Routes Overview

### User Registration
The user registration route allows new users to create an account by providing a username, email, and password. Upon successful creation, a session is initiated, and the user is marked as logged in.

### User Login
The login route authenticates users based on their email and password. If the credentials are valid, the session is updated to reflect that the user is logged in.

### User Logout
The logout route allows users to end their session. When a user logs out, their session is destroyed, and they are no longer considered logged in.

## Home Routes Overview

### Display Galleries
The home route fetches all galleries from the database and renders them on the homepage. The session state is sent to the template to check if the user is logged in, enabling personalized experiences.

### View Gallery Details
The gallery route allows users to view detailed information about a specific gallery, including its associated paintings. The session state is also passed to the template.

### View Painting Details
The painting route allows users to view detailed information about a specific painting. Again, the session state is provided to manage user experience.

### Render Login Page
The login route checks if a user is already logged in. If so, it redirects to the homepage; if not, it renders the login template.

## How to Start

1. **Set Up Environment Variables**: Create a `.env` file to store your database connection details and session secrets.
2. **Install Required Packages**: Ensure you have Node.js installed, then install the necessary packages:
   ```bash
   npm install express express-session handlebars
   ```
3. **Create User and Gallery Models**: Define the User and Gallery models in your application to handle user data and gallery-related logic.
4. **Set Up Routes**: Create `userRoutes.js` and `homeRoutes.js` to handle user registration, login, and gallery functionalities.
5. **Start the Server**: Launch your Express application to begin handling requests.

## Summary
This guide provides an overview of implementing user authentication and gallery functionality in an Express application. By following the outlined steps, you can manage user accounts effectively and provide dynamic content based on user interactions and sessions. Understanding how to work with sessions is crucial for developing web applications that require user accounts and personalized experiences.
