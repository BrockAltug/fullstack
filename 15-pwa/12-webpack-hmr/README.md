# PWA Webpack HMR

## Overview

This project demonstrates the use of **Hot Module Replacement (HMR)** with Webpack for a Progressive Web App (PWA). HMR enables developers to update modules in a running application without a full page reload, leading to a more efficient development process.

---

## Key Features

1. **Hot Module Replacement (HMR)**:

   - Enables on-the-fly updates of JavaScript and CSS modules.
   - Maintains application state during updates without reloading the browser.

2. **Webpack Configuration**:

   - Uses Webpack plugins such as `HtmlWebpackPlugin` and `MiniCssExtractPlugin`.
   - Configures the development server with HMR enabled.

3. **Interactive Features**:
   - Clickable buttons to change an image and text color dynamically.

---

## Concepts Covered

1. **Hot Module Replacement**:

   - Opt-in feature for efficient module updates during development.
   - Includes fallback error handling for failed updates.

2. **Webpack Plugins**:

   - **`HtmlWebpackPlugin`**: Dynamically generates an HTML file with the bundled JavaScript.
   - **`MiniCssExtractPlugin`**: Extracts CSS into separate files.

3. **Webpack Development Server**:
   - Configured with `webpack-dev-server` for live reloading and HMR.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install the necessary dependencies:

```bash
npm install
```

### **2. Start the Development Server**

To enable HMR and start the server, run:

```bash
npm run dev
```

This will open the application in your default browser.

### **3. Build for Production**

To create a production build, use:

```bash
npm run build
```

---

## Example Usage

1. **Changing Image**:

   - Click the "Change Box Image!" button to toggle between two robot images.

2. **Changing Header Color**:
   - Click the "Change Header Color!" button to toggle the header color between blue and black.

---

## Summary

This project showcases the integration of Webpack's Hot Module Replacement (HMR) in a Progressive Web App (PWA). With a seamless development experience, HMR allows developers to make changes without disrupting the application state.

---

## Resources

- [Webpack Hot Module Replacement Documentation](https://webpack.js.org/concepts/hot-module-replacement/)
- [Webpack Plugins](https://webpack.js.org/plugins/)
- [Webpack DevServer](https://webpack.js.org/configuration/dev-server/)
