# PWA Contact Management App

## Overview

The **PWA Contact Management App** is a progressive web application (PWA) that leverages IndexedDB for storing and managing contact details. Users can add, view, and delete contact entries directly within the application, which is optimized for offline functionality.

---

## Key Features

1. **IndexedDB Integration**:

   - Utilize IndexedDB to store, retrieve, update, and delete contact data.

2. **PWA Features**:

   - Fully functional offline using service workers.
   - Installable as a standalone app on supported devices.

3. **Dynamic UI**:

   - A responsive user interface that dynamically displays contact cards fetched from IndexedDB.

4. **CRUD Operations**:
   - Create: Add new contacts via a form.
   - Read: Display saved contacts as dynamic cards.
   - Update: Update contact details within IndexedDB.
   - Delete: Remove unwanted contacts with a simple button click.

---

## Concepts Covered

- **IndexedDB CRUD Operations**:
  - Open or create a database using `idb`.
  - Perform create, read, update, and delete operations on IndexedDB.
- **Service Workers**:

  - Utilize service workers for caching assets and enabling offline functionality.

- **Webpack Configuration**:
  - Use `webpack` for bundling, including `HtmlWebpackPlugin` and `WorkboxWebpackPlugin` for PWA support.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install all necessary dependencies for both the client and server:

```bash
npm run install
```

### **2. Run the Application in Development Mode**

To run both the client and server in development mode:

```bash
npm run start:dev
```

### **3. Build for Production**

To create an optimized production build of the client:

```bash
npm run build
```

### **4. Start the Production Server**

After building the client, start the production server:

```bash
npm run start
```

---

## Technologies Included

- **Frontend**:

  - HTML
  - CSS
  - JavaScript
  - Webpack

- **Backend**:

  - Node.js
  - Express.js

- **Database**:

  - IndexedDB

- **PWA Tools**:
  - Workbox
  - Service Workers
  - Webpack PWA Manifest

---

## Summary

The PWA Contact Management App demonstrates the power of PWAs combined with IndexedDB for offline-ready contact management. It provides a seamless user experience, allowing users to manage contacts efficiently, even without an internet connection.

---

## Resources

- [IndexedDB Documentation](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Workbox Documentation](https://developer.chrome.com/docs/workbox/)
- [Webpack Documentation](https://webpack.js.org/)
