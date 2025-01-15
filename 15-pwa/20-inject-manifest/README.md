# PWA Inject Manifest

## Overview

This project demonstrates the implementation of a Progressive Web App (PWA) using the **Workbox InjectManifest plugin**. The plugin provides a more flexible way to manage service worker caching by injecting manifest data into a custom service worker script.

---

## Key Features

1. **Custom Service Worker**:

   - Enables precise control over caching logic and runtime behavior.
   - Uses the `InjectManifest` plugin to inject precache manifest dynamically.

2. **Caching Strategies**:

   - Caches essential files for offline use.
   - Allows images and dynamic data to be cached at runtime.

3. **Service Worker Registration**:

   - Registers the custom service worker for the app.

4. **Client-Server Setup**:
   - Combines a Webpack-powered client with an Express.js backend for full-stack development.

---

## Concepts Covered

1. **Workbox InjectManifest**:

   - Customizes service worker behavior by injecting a precache manifest.
   - Avoids automatically generated service workers, enabling developers to specify advanced caching strategies.

2. **Progressive Web Apps**:

   - Offline-first functionality with service workers.
   - Runtime caching for images and other assets.

3. **Webpack Configuration**:

   - Configured to bundle JavaScript, CSS, and images.
   - Includes Workbox for managing service workers.

4. **Express.js Backend**:
   - Serves static assets from the `dist` folder.
   - Provides an efficient and lightweight server setup.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install dependencies for both client and server:

```bash
npm run install
```

### **2. Build the Client**

Build the client-side assets using Webpack:

```bash
npm run build
```

### **3. Start the Development Server**

Start the client and server together for development:

```bash
npm run start:dev
```

Alternatively, start the production server:

```bash
npm run start
```

---

## Example Usage

1. Navigate to the app in your browser.
2. Interact with the app's UI:
   - Change the box image.
   - Change the header color.
3. Inspect the browser's application tab to confirm service worker registration and caching behavior.

---

## Technologies Included

- **Frontend**:
  - Webpack
  - Workbox InjectManifest Plugin
  - CSS
- **Backend**:
  - Express.js
- **Tools**:
  - Concurrently
  - Webpack Dev Server

---

## Summary

This project illustrates how to use the Workbox InjectManifest plugin for creating highly customizable service workers in a Progressive Web App. By enabling manual control over caching strategies, it provides flexibility for developers to optimize their apps for offline and runtime scenarios.

---

## Resources

- [Workbox InjectManifest Documentation](https://developer.chrome.com/docs/workbox/modules/workbox-build/#injectmanifest-mode)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Express.js Documentation](https://expressjs.com/)
