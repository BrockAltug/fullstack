# MVC Introduction with Handlebars.js: Potluck Party App

## Overview

This project demonstrates the **Model-View-Controller (MVC)** architecture using **Express.js** and **Handlebars.js** for a simple Potluck Party application. The app renders a static menu page, showcasing the integration of Handlebars.js as a template engine and the MVC design pattern.

---

## Key Features

1. **Model-View-Controller (MVC) Architecture**:

   - Implements the separation of concerns:
     - **Model**: Handles data and business logic.
     - **View**: Manages user interface and layout.
     - **Controller**: Routes commands between the Model and View.

2. **Handlebars.js Integration**:

   - Uses Handlebars.js as the template engine to render dynamic content.

3. **Static Menu Display**:
   - Renders a static list of menu items on the `/` route.

---

## Concepts Covered

1. **MVC Framework**:

   - Separation of responsibilities across Models, Views, and Controllers.

2. **Handlebars.js**:

   - Template engine for rendering HTML with dynamic placeholders.

3. **Express.js**:
   - Web server for routing and serving content.

---

## Application Structure

### **Files and Functionality**

1. **`controllers/dish-routes.js`**:

   - **Type**: Controller
   - **Responsibility**: Routes commands to the Model and View.
   - Includes:
     - `GET /`: Renders the `all` Handlebars template.

2. **`models/Dish.js`**:

   - **Type**: Model
   - **Responsibility**: Defines the `Dish` data structure and business logic.

3. **`views/layouts/main.handlebars`**:

   - **Type**: View
   - **Responsibility**: Provides the layout for all templates.
   - Includes:
     - Placeholder `{{{body}}}` for rendering main content.

4. **`views/all.handlebars`**:

   - **Type**: View
   - **Responsibility**: Displays a static menu with hardcoded data.

5. **`server.js`**:
   - Sets up the Express server and Handlebars.js as the template engine.
   - Routes requests to `dish-routes.js`.

---

## Expected Behavior

1. **Access the Homepage**:

   - Navigate to `http://localhost:3001/`.
   - The menu is displayed as defined in `all.handlebars`.

2. **Separation of Concerns**:
   - The Controller (`dish-routes.js`) connects the View (`all.handlebars`) to the route.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install express express-handlebars
   ```

2. **Run the Application**:

   - Start the server:
     ```bash
     node server.js
     ```

3. **Access the Application**:
   - Open your browser and navigate to:
     ```
     http://localhost:3001/
     ```

---

## File Commentary

1. **`controllers/dish-routes.js`**:

   - Responsible for routing and rendering the `all` template.

2. **`models/Dish.js`**:

   - Defines the data structure for dishes and future database integration.

3. **`views/layouts/main.handlebars`**:

   - Provides the overall layout for the app, with a placeholder for dynamic content.

4. **`views/all.handlebars`**:

   - Displays a hardcoded list of menu items.

5. **`server.js`**:
   - Configures the Express server and Handlebars.js template engine.

---

## Summary

This project provides an introduction to the MVC architecture using Handlebars.js for rendering views. It demonstrates how to separate concerns effectively, making the application maintainable and scalable for future enhancements.
