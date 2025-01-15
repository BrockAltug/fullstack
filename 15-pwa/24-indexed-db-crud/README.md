# PWA IndexedDB CRUD

## Overview

This project demonstrates a Progressive Web Application (PWA) utilizing IndexedDB for full CRUD (Create, Read, Update, Delete) operations. It uses the `idb` library to simplify interactions with IndexedDB.

---

## Key Features

1. **Database Initialization**:

   - Creates an IndexedDB database named `todos-db` with a single object store `todos`.
   - Supports auto-incremented `id` for entries.

2. **CRUD Operations**:

   - **Create**: Add new entries to the `todos` store.
   - **Read**: Retrieve all entries or a specific entry by ID.
   - **Update**: Update an existing entry by ID.
   - **Delete**: Remove an entry by ID.

3. **Webpack Integration**:

   - Bundles JavaScript and CSS for efficient delivery.
   - Uses modern JavaScript features with Babel transpilation.

4. **Dependencies**:
   - `idb`: Simplifies IndexedDB interactions.
   - Webpack plugins for HTML, CSS, and JavaScript management.

---

## Concepts Covered

1. **IndexedDB**:

   - Initialization and schema creation.
   - Performing CRUD operations with promises.

2. **PWA Features**:

   - Offline capability with IndexedDB as the local data store.

3. **Modern JavaScript**:

   - Asynchronous programming with `async/await`.
   - ES6 modules and Babel transpilation.

4. **Webpack Configuration**:
   - Plugins for HTML and CSS handling.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install all required dependencies:

```bash
npm install
```

### **2. Start Development Server**

Use the following command to start the development server with live reloading:

```bash
npm run dev
```

### **3. Build for Production**

Generate the production-ready bundle using:

```bash
npm run build
```

### **4. Start Watching Files**

Automatically rebuild files on changes using:

```bash
npm run start
```

---

## Summary

The **PWA IndexedDB CRUD** project provides a robust example of using IndexedDB for client-side storage in a progressive web application. It demonstrates full CRUD functionality with a modern JavaScript setup and tools like Webpack for efficient development.

---

## Resources

- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [idb Library](https://www.npmjs.com/package/idb)
- [Webpack Documentation](https://webpack.js.org/)
