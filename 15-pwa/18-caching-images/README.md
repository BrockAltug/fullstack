# PWA Caching Images

## Overview

This project demonstrates the implementation of **image caching** using a **Progressive Web App (PWA)** with Workbox. The application includes a service worker that caches images for offline use, employing a cache-first strategy to optimize image loading performance.

---

## Key Features

1. **Service Worker with Image Caching**:

   - Implements a service worker to cache images dynamically.
   - Uses a custom cache name for images with a maximum of two entries.

2. **Webpack Configuration**:

   - Utilizes Workbox Webpack Plugin for service worker generation.
   - Excludes images from precaching but caches them at runtime using caching strategies.

3. **Runtime Caching**:
   - Dynamically caches images when requested.
   - Applies a cache-first strategy for efficient loading.

---

## Concepts Covered

1. **Progressive Web App (PWA)**:

   - Leverages service workers for offline functionality.
   - Implements image caching strategies.

2. **Workbox**:

   - Generates service workers for runtime caching.
   - Configures custom cache expiration and cache-first strategy.

3. **Webpack Configuration**:
   - Automates service worker setup using Workbox Webpack Plugin.
   - Processes CSS, JavaScript, and images.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install all dependencies for both the client and server:

```bash
npm install
```

### **2. Build the Application**

Use Webpack to build the client application:

```bash
npm run build
```

### **3. Start the Application**

Start the application in development mode with the following command:

```bash
npm run start:dev
```

### **4. Access the Application**

Open your web browser and navigate to:

```
http://localhost:3001
```

---

## Technologies Included

- **Express.js**: Backend framework to serve static files and handle routes.
- **Workbox**: Library for managing service workers and caching.
- **Webpack**: Module bundler for processing assets and generating the build.
- **Babel**: JavaScript transpiler for backward compatibility.

---

## Summary

This project showcases the integration of image caching into a PWA using Workbox and Webpack. By implementing a cache-first strategy, the application ensures efficient image loading while maintaining control over cache size and expiration.

---

## Resources

- [Workbox Documentation](https://developer.chrome.com/docs/workbox/)
- [Webpack Documentation](https://webpack.js.org/)
- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
