# PWA IndexedDB

## Overview

This project demonstrates how to integrate and use IndexedDB in a Progressive Web Application (PWA) with Webpack. It includes the setup and initialization of an IndexedDB database named `todos-db`, with a focus on storing and managing data locally for offline-first functionality.

---

## Key Features

1. **IndexedDB Integration**:

   - Creates and initializes a database named `todos-db` with a version number of `1`.
   - Implements an object store named `todos` with an automatically incrementing key path `id`.

2. **Webpack Configuration**:

   - Bundles assets using Webpack.
   - Generates a dynamic `index.html` file using the `HtmlWebpackPlugin`.

3. **Babel Integration**:
   - Transpiles modern JavaScript for cross-browser compatibility using Babel.

---

## Concepts Covered

1. **IndexedDB**:

   - How to set up and use IndexedDB for offline storage.
   - Managing object stores and their schema.

2. **Webpack**:

   - Setting up Webpack for bundling and development.
   - Using plugins like `HtmlWebpackPlugin` for dynamic HTML file generation.

3. **Babel**:
   - Transpiling ES6+ JavaScript for compatibility with older browsers.

---

## Installation and Usage

1. **Install Dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

2. **Run in Development Mode**:

   Use the following command to start the Webpack development server:

   ```bash
   npm run dev
   ```

3. **Build for Production**:

   To build the application for production, use:

   ```bash
   npm run build
   ```

4. **Start Watching for Changes**:

   If you want Webpack to watch for file changes and rebuild automatically:

   ```bash
   npm start
   ```

---

## Summary

This project highlights the integration of IndexedDB with Webpack to create an offline-capable PWA. It showcases the setup and usage of IndexedDB for managing local data, along with using Webpack for bundling and Babel for modern JavaScript transpilation.

---

## Resources

- [MDN: IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)
- [Workbox Documentation](https://developer.chrome.com/docs/workbox/)
