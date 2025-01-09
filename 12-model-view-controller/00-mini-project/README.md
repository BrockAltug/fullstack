# MVC Mini Project

## Concepts Covered

### **1. Authentication**

- Implemented user login and signup functionalities.
- Used session storage to maintain user sessions with `express-session` and `connect-session-sequelize`.
- Redirected unauthenticated users to the login page using a custom `withAuth` middleware.

### **2. Models**

- **User Model**:
  - Stores user information (e.g., name, email, password).
  - Includes password hashing with bcrypt during user creation and updates.
  - Provides a `checkPassword` method for authentication.
- **Project Model**:
  - Stores project details such as name, description, funding required, and creation date.
  - Associated with the `User` model for relational data management.

### **3. Routes**

- **User Routes**:
  - `POST /api/users`: Handles user registration.
  - `POST /api/users/login`: Handles user login.
  - `POST /api/users/logout`: Handles user logout.
- **Project Routes**:
  - `POST /api/projects`: Allows logged-in users to create a new project.
  - `DELETE /api/projects/:id`: Allows logged-in users to delete a project they created.
- **Home Routes**:
  - `GET /`: Renders the homepage with a list of projects.
  - `GET /project/:id`: Displays details for a specific project.
  - `GET /profile`: Displays the user's profile and their projects (protected route).

### **4. Views**

- **Homepage**:
  - Displays a list of projects, including funding requirements, creators, and creation dates.
  - Utilizes Handlebars.js to dynamically render project data.
- **Profile Page**:
  - Allows users to view and manage their created projects.
  - Provides options to add new projects or delete existing ones.
- **Login Page**:
  - Enables users to log in or create an account.

### **5. Helpers**

- Custom Handlebars helpers:
  - `get_emoji`: Dynamically renders emoji based on certain conditions.
  - `format_amount`: Formats numbers (e.g., funding required).
  - `format_date`: Converts and formats dates.

### **6. Middleware**

- **Custom Authentication Middleware**:
  - `withAuth`: Redirects unauthenticated users to the login page.

### **7. Database Setup**

- Utilized Sequelize to define and interact with PostgreSQL.
- Seeded the database with initial user and project data.

### **8. Client-Side Functionality**

- **Login & Signup (public/js/login.js)**:
  - Handles user login and account creation.
  - Redirects users to the profile page upon successful authentication.
- **Profile Management (public/js/profile.js)**:
  - Allows users to add new projects or delete existing ones.
- **Logout (public/js/logout.js)**:
  - Ends the user's session and redirects them to the homepage.

### **9. Server-Side Configuration**

- Configured `express-session` with Sequelize as the session store.
- Used `dotenv` to manage environment variables.
- Set up Handlebars as the templating engine for server-rendered views.

## How to Use

1. Clone the repository and install dependencies using `npm install`.
2. Create a `.env` file with the following variables:
   ```env
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_URL=your_database_url # Optional for hosted databases
   ```
3. Seed the database with `npm run seed`.
4. Start the application with `npm start`.
5. Access the app in your browser at `http://localhost:3001`.
