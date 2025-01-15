# PWA Workbox Service Workers

## Overview

This project demonstrates how to implement **service workers** in a **Progressive Web Application (PWA)** using **Workbox**. Service workers are essential for enabling offline functionality, caching, and other advanced features in PWAs.

---

## Key Features

1. **Service Worker Integration**:

   - Utilizes Workbox for simplified service worker setup.
   - Provides offline support and resource caching.

2. **Dynamic Imports**:

   - Imports functionality for service worker registration.

3. **Efficient Build Process**:

   - Webpack is used to bundle the application efficiently.
   - Includes loaders for handling CSS, images, and modern JavaScript.

4. **Express Server**:
   - Serves the client application and supports API routes.

---

## Concepts Covered

1. **Service Workers**:

   - Registering service workers for offline support.
   - Leveraging Workbox for caching strategies.

2. **Webpack Configuration**:

   - Bundling assets for efficient loading.
   - Using Webpack plugins like `html-webpack-plugin`.

3. **Express Server**:
   - Hosts the client application and serves static assets.

---

## Installation and Usage

### **1. Install Dependencies**

Navigate to the root folder of the project and install dependencies for both the client and server:

```bash
npm run install
```

### **2. Build the Application**

To bundle the client application using Webpack:

```bash
npm run build
```

### **3. Start the Development Server**

Start both the client and server for development:

```bash
npm run start:dev
```

### **4. Start the Production Server**

Run the following to start the server and serve the built application:

```bash
npm start
```

---

## Example Usage

### Service Worker Registration

The service worker is registered in `register-sw.js`:

```javascript
export const registerSW = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js");
    });
  }
};
```

In `index.js`, the service worker registration is called:

```javascript
import { registerSW } from "./register-sw";
registerSW();
```

---

## Summary

This project highlights how to integrate Workbox service workers into a PWA for improved offline support and caching. It demonstrates how to use Webpack to bundle the application and an Express server to serve it efficiently.

---

## Resources

- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [MDN Web Docs: Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Webpack Documentation](https://webpack.js.org/)
- [Express Documentation](https://expressjs.com/)
- [Workbox docs on generating a service worker with webpack using GenerateSW](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)
- [Workbox docs on GenerateSW](https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-GenerateSW)
- [Simulate offline behavior with Chrome DevTools](https://developer.chrome.com/docs/devtools/network/reference/#offline)
- [Interact with service workers with Chrome DevTools](https://developer.chrome.com/docs/workbox/improving-development-experience/#service-worker-development-aids)

# 📖 Use Workbox to Generate a Service Worker

- As an app user, I want to be able to precache assets and view my app even when offline.

## Acceptance Criteria

- It’s done when logic is added to the `index.js` to register a service worker.

- It's done when the `webpack.config.js` file is updated to use the GenerateSW class of the workbox webpack plugin.

- It’s done when the app is started using `npm install` and `npm run start:dev` and a log from GenerateSW appears in the console with a message similar to the following: `“The service worker at service-worker.js will precache 5 URLs, totaling 35.1 kB.”`

- It’s done when a `service-worker.js` file is generated in the build directory.

- It’s done when the service worker is active and the app is still visible even when offline.

## 💡 Hints

- How can we use Chrome DevTools to test if our service worker is active and our app is still visible even when offline?

# JavaScript Modules in Service Workers

## Key Features

- Understanding module usage in service workers.
- Addressing common issues with modules in service workers.
- Steps to implement ES modules in service workers.

1. **Modules in Service Workers**:

   - Service workers traditionally used classic scripts but now support ES modules with proper setup.

2. **Why Modules May Seem to Not Work**:

   - Incorrect script type declaration.
   - Cross-origin restrictions.
   - Browser support limitations.
   - File path issues.
   - Incompatible bundling tools.

3. **Steps to Make Modules Work**:
   - Register the service worker with `type: 'module'`.
   - Use correct import paths.
   - Ensure external modules have CORS headers.
   - Check browser compatibility.

## Installation and Usage

### 1. Registering the Service Worker

Register the service worker as a module in your main JavaScript file:

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", {
      type: "module",
    })
    .then(() => console.log("Service Worker registered as a module!"));
}
```

### 2. Creating the Service Worker File

Write your service worker file with ES module syntax:
**`service-worker.js`**

```javascript
import { cacheResources, handleFetch } from "./utils.js";

self.addEventListener("install", (event) => {
  event.waitUntil(cacheResources());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(handleFetch(event));
});
```

### 3. Utility Module

Create a utility module for common functions:
**`utils.js`**

```javascript
export async function cacheResources() {
  const cache = await caches.open("my-cache");
  await cache.addAll(["/index.html", "/style.css", "/script.js"]);
}

export async function handleFetch(event) {
  const response = await caches.match(event.request);
  return response || fetch(event.request);
}
```

## Example Usage

A service worker is now using ES modules with correct setup, including caching resources and handling fetch events.

## Technologies Included

- JavaScript (ES6 Modules)
- Service Workers

JavaScript modules work in service workers if properly configured. Key steps include registering with `type: 'module'`, using correct paths, and ensuring compatibility. This approach allows modern ES modules to be seamlessly used in your service worker.

## Resources

- [MDN Web Docs: Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [MDN Web Docs: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Google Developers: Service Workers Overview](https://developers.google.com/web/fundamentals/primers/service-workers)
