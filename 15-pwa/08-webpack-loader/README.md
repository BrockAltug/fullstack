# PWA Webpack Loader

## Overview

This project demonstrates the use of Webpack loaders to manage and process various types of assets such as CSS, images, and JavaScript with Babel for modern JavaScript support.

---

## Key Features

1. **Webpack Configuration**:

   - Processes CSS using `style-loader` and `css-loader`.
   - Handles image assets like PNG, JPEG, and SVG with `asset/resource`.
   - Transpiles modern JavaScript with `babel-loader` and `@babel/preset-env`.

2. **Dynamic Asset Management**:

   - Dynamically loads images and switches between them based on user interactions.

3. **Babel Integration**:
   - Ensures compatibility with older browsers by transpiling ES6+ JavaScript to ES5.

---

## Concepts Covered

1. **Webpack Loaders**:

   - Use of `style-loader` and `css-loader` to handle CSS.
   - Use of `asset/resource` for managing image files.
   - Use of `babel-loader` for transpiling modern JavaScript.

2. **Webpack Entry and Output**:

   - Configuration of Webpack entry points and output files.

3. **Babel Presets**:
   - Implementation of `@babel/preset-env` for modern JavaScript syntax support.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install the required dependencies:

```bash
npm install
```

### **2. Build the Project**

Compile the project files using Webpack:

```bash
npm run build
```

### **3. Serve the Project**

Use a static server or open the `dist/index.html` file directly in your browser to see the application in action.

---

## Technologies Included

- **Webpack**: Module bundler for managing assets and dependencies.
- **Babel**: JavaScript transpiler for modern syntax compatibility.
- **CSS Loaders**: Style and CSS loaders for handling CSS files.
- **Image Loaders**: Webpack asset/resource for managing image files.

---

## Summary

This project is a practical implementation of Webpack loaders and Babel for modern PWA development. It showcases how to configure and use Webpack to process assets like CSS and images and integrate Babel for ES6+ compatibility.

---

## Resources

- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Babel Documentation](https://babeljs.io/docs/en/)
- [Webpack Loaders](https://webpack.js.org/loaders/)
