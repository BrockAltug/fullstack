# React Router with Conditional Rendering and Dynamic Routing

## Overview

This project demonstrates the use of **React Router** to implement client-side routing with dynamic rendering of components based on the current URL. It includes a navigation bar and multiple pages, showcasing React's capabilities for building interactive and dynamic user interfaces.

---

## Key Features

1. **Client-Side Routing**:

   - Uses **React Router** to enable seamless navigation between multiple pages (`Home`, `About`, `Profile`) without full-page reloads.

2. **Dynamic Routing**:

   - Implements dynamic routes (e.g., `/profile/:userId`) to display data for individual users based on the URL parameter.

3. **Error Handling**:

   - Provides an `ErrorPage` component for invalid routes, ensuring a consistent user experience.

4. **State Management**:

   - Uses React's `useState` hook to manage and track the current application state.

5. **Reusable Components**:

   - Features modular and reusable components like `Nav`, `HomePage`, `ProfilePage`, and `ErrorPage`.

6. **Dynamic Data Fetching**:

   - Fetches and displays mock user data from an API or local utility functions.

---

## Concepts Covered

1. **React Router**:

   - Utilizes `BrowserRouter`, `Route`, and `useParams` to handle navigation and dynamic route parameters.

2. **Dynamic Rendering**:

   - Renders different components (`HomePage`, `AboutPage`, `ProfilePage`) based on the current URL path.

3. **Error Boundaries**:

   - Shows an `ErrorPage` component when a user navigates to an undefined route.

4. **State and Props**:

   - Uses React's state and props to manage and pass data between components.

5. **Conditional Rendering**:

   - Dynamically renders content and applies styles based on the current state or URL.

---

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

4. **View the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the app.

---

## Application Structure

### Pages

1. **Home Page**:

   - Displays a list of mock users with a link to each user's profile page.
   - Uses `Link` from React Router for navigation.

2. **About Page**:

   - A static page providing information about the application or its developers.

3. **Profile Page**:

   - Fetches and displays detailed data for an individual user based on the `userId` URL parameter.
   - Uses `useParams` to extract route parameters.

4. **Error Page**:
   - Displays a fallback error message for invalid routes.

---

## Expected Behavior

1. **Homepage**:

   - Lists all users and provides links to their profile pages.
   - Clicking a user link navigates to the respective profile page.

2. **About Page**:

   - Displays static "About Us" content.

3. **Profile Page**:

   - Fetches and displays the user's detailed profile data based on the URL parameter.

4. **Error Handling**:
   - Navigating to an invalid URL displays the `ErrorPage` with a user-friendly message.

---

## Summary

This project showcases the integration of **React Router** for client-side routing, dynamic rendering, and reusable component-based architecture. It is a practical example of building scalable and interactive React applications with efficient navigation and state management.
