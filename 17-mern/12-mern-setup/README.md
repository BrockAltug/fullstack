# MERN Stack Application Setup and Architecture

## Overview

This document provides a detailed guide on setting up a MERN-stack application, explaining key components such as root-level scripts, client-side proxy configuration, server-side production handling, and more.

---

## Key Features

1. **Efficient Root-Level Script Management:** Automate server and client tasks.
2. **Seamless Proxy Configuration:** Resolve CORS issues during development.
3. **Production-Ready Server Configuration:** SPA support with Express.js.
4. **GraphQL Integration:** API and database interactions via GraphQL.
5. **Database Seeding Support:** Easily populate the database with sample data.

---

## Root-level Functionality

### `package.json` Scripts

The root-level `package.json` contains scripts that manage both the server and client workflows. Below is an explanation of each script:

```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

- **start**: Launches the production server by running the server-side application located at `server/server.js`.
- **develop**: Runs the server and client concurrently in development mode. It uses the `concurrently` package to execute the server's `watch` script and the client's `dev` script simultaneously.
- **install**: Installs dependencies for both the server and the client by navigating to each directory and running `npm install`.
- **seed**: Seeds the database by executing the seed script in the server directory.
- **build**: Builds the client application for production by running the client's `build` script.

---

## Client-side Functionality

### Proxy Configuration in `vite.config.js`

The client application uses a proxy to ensure that API requests (e.g., `/graphql`) are routed correctly during development. This avoids cross-origin resource sharing (CORS) issues.

```js
proxy: {
  '/graphql': {
    target: 'http://localhost:3001',
    changeOrigin: true,
    secure: false,
  },
},
```

- **`/graphql`**: Specifies the API endpoint to proxy.
- **`target`**: Defines the destination server for API requests. In this case, it points to the development server running on port 3001.
- **`changeOrigin`**: Ensures the host header matches the target.
- **`secure`**: Disables SSL verification for development purposes.

This proxy allows the client to interact seamlessly with the GraphQL server running on `http://localhost:3001`.

---

## Server-side Functionality

### Production Handling in `server.js`

The server includes logic to serve the production build of the client application and handle wildcard routes for Single Page Application (SPA) functionality.

```js
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}
```

- **`process.env.NODE_ENV`**: Checks if the application is running in a production environment.
- **`app.use(express.static(...))`**: Serves static files from the `client/dist` directory, which contains the production build of the client application.
- **`app.get('*', ...)`**: Handles all wildcard routes by sending the `index.html` file. This ensures that the SPA routing works correctly in production.

This block ensures the server can deliver both API responses and the client-side application seamlessly in production.

---

## Concepts Covered

- MERN stack architecture setup.
- Configuring and managing scripts for development and production.
- Handling proxy configuration in Vite.js for seamless API communication.
- Serving a production build of an SPA using Express.js.

---

## Installation and Usage

1. Install dependencies:

   ```sh
   npm install
   ```

2. Seed the database:

   ```sh
   npm run seed
   ```

3. Start the application:
   ```sh
   npm run develop
   ```

---

## Example Usage

Visit `http://localhost:3001/graphql` to access the GraphQL playground.

---

## Technologies Included

- MongoDB (Database)
- Express.js (Backend Framework)
- React (Frontend Framework)
- Node.js (Server)
- GraphQL (API Query Language)

---

## Summary

This document explains the critical components of a MERN-stack application setup, including the purpose and functionality of scripts, proxy configuration, and production handling. By following this structure, developers can effectively manage and deploy a MERN application.

---
