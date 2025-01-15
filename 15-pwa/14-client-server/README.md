# PWA Client-Server Integration

## Overview

This project demonstrates a **Progressive Web Application (PWA)** setup with a **client-server architecture**. The server is powered by Express.js to serve static files from the client, which is bundled using Webpack. This setup highlights seamless integration between the client and server, allowing for efficient development and deployment.

---

## Key Features

1. **Client-Server Setup**:

   - The client is built with Webpack and outputs a `dist` folder containing bundled assets.
   - The server serves static files from the client's `dist` directory.

2. **Express.js Server**:

   - Handles HTTP requests and serves the client-side application.
   - Configured with a single route for serving the application.

3. **Concurrent Development**:

   - The project uses `concurrently` to run both client and server applications simultaneously during development.

4. **Build and Serve**:
   - Provides scripts to build the client and serve the production-ready files via the server.

---

## Concepts Covered

- **Client-Server Architecture**:

  - Integration between a front-end client and a back-end server.

- **Webpack Bundling**:

  - Usage of Webpack for module bundling and optimizing client-side assets.

- **Express.js Integration**:

  - Serving static files and handling routing for a single-page application.

- **Concurrent Development Workflow**:
  - Running client and server simultaneously for efficient testing.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install dependencies for both the client and server:

```bash
npm run install
```

### **2. Start Development Server**

To start both the client and server in development mode:

```bash
npm run start:dev
```

### **3. Build for Production**

To build the client-side application for production:

```bash
npm run build
```

### **4. Serve the Production Build**

To serve the production build via the Express server:

```bash
npm start
```

---

## Technologies Included

- **Express.js**: Server-side framework for handling HTTP requests and serving static files.
- **Webpack**: Module bundler for client-side assets.
- **Concurrently**: Utility to run multiple commands concurrently for development.

---

## Summary

This project demonstrates a full client-server integration for a Progressive Web Application. By combining Webpack for bundling and Express.js for serving the application, it offers an efficient development and deployment pipeline.

---

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Webpack Documentation](https://webpack.js.org/)
- [Concurrently GitHub Repository](https://github.com/open-cli-tools/concurrently)
