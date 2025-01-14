# PWA Webpack Intro

## Description

This project introduces the implementation of **Webpack** for creating a Progressive Web App (PWA). Webpack is used as a module bundler to efficiently manage JavaScript, CSS, and other assets. The project also demonstrates how to configure Webpack for bundling files and managing dependencies.

---

## Key Concepts

1. **Webpack Basics**:

   - Webpack is a static module bundler that transforms and combines project files into optimized output.

2. **Entry and Output**:

   - The `entry` specifies the starting point for bundling, and the `output` defines the bundled file's location and name.

3. **PWA Integration**:

   - The app uses service workers and Webpack configuration to meet PWA requirements.

4. **Module System**:
   - ES6 modules (`import` and `export`) are utilized for modular and maintainable code.

---

## Project Structure

### **Files**

1. **index.html**: The main HTML file with links to JavaScript and styles, configured to work with Webpack's output.
2. **src/index.js**: The entry point for Webpack, connecting the `box.js` and `header.js` modules.
3. **src/box.js**: Defines the functionality for changing the color of the box dynamically.
4. **src/header.js**: Defines the functionality for changing the header color dynamically.
5. **webpack.config.js**: Configures Webpack, specifying `entry`, `output`, and the development mode.
6. **package.json**: Includes project metadata and dependencies for Webpack and Webpack CLI.

---

## Implementation Details

### **index.html**

- Contains the main structure of the app, including a header, a box element, and two buttons for interaction.
- The `TODO` comments highlight necessary changes to the `script` path after bundling with Webpack.

### **JavaScript Modules**

1. **src/index.js**:

   - Serves as the entry point for Webpack.
   - Imports `boxClick` and `headerClick` from their respective modules.
   - Sets up event listeners for the buttons.

   ```javascript
   import { boxClick } from "./box";
   import { headerClick } from "./header";

   document.getElementById("boxBtn").addEventListener("click", boxClick);
   document.getElementById("headerBtn").addEventListener("click", headerClick);
   ```

2. **src/box.js**:

   - Handles the logic for changing the box color dynamically.
   - Utilizes the `export` keyword for module reusability.

   ```javascript
   export const boxClick = () => {
     const box = document.getElementById("box");
     if (box.style.backgroundColor === "blue") {
       box.style.backgroundColor = "yellow";
     } else {
       box.style.backgroundColor = "blue";
     }
   };
   ```

3. **src/header.js**:

   - Handles the logic for changing the header text color dynamically.

   ```javascript
   export const headerClick = () => {
     const header = document.getElementById("header");
     if (header.style.color === "blue") {
       header.style.color = "black";
     } else {
       header.style.color = "blue";
     }
   };
   ```

---

## Webpack Configuration

### **File: webpack.config.js**

The Webpack configuration file specifies the following:

- **Entry**:

  - The starting point for Webpack's module bundling.
  - Set to `./src/index.js`.

- **Output**:
  - Defines the bundled file's name (`main.js`) and location (`dist` folder).

```javascript
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

---

## Usage

### **Setup**

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the project with Webpack:

   ```bash
   npm run build
   ```

3. Open `index.html` in your browser. Update the `<script>` tag to reference the bundled file (`./main.js`) if necessary.

---

## Summary

This project demonstrates how to use Webpack to create a simple PWA with modular JavaScript. Webpack streamlines the development process by bundling files, managing dependencies, and optimizing the output for production.

---

## Resources

- [Webpack Documentation](https://webpack.js.org/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Node.js Documentation](https://nodejs.org/en/docs/)
