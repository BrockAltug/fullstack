# express-static-assets

## Serving Static Assets with Express.js

## Concepts Covered

- Using Express.js to serve static files such as images, CSS, and JavaScript.
- Configuring middleware to serve assets from a designated folder.

## Learning Objectives

- Understand how to set up an Express.js server to serve static assets.
- Learn how to structure a project with a `public` folder containing static files.
- Reference static assets in an HTML file.

## Features

- **Static File Serving**: Serves files (e.g., images, CSS, JS) from the `public` directory.
- **Middleware Setup**: Configures Express middleware to use the `express.static` function for serving static files.
- **HTML Integration**: Displays static content (e.g., images, styles) in an HTML file served from the `public` folder.

## Expected Behavior

1. The server listens on port `3001`.
2. When the browser navigates to [http://localhost:3001](http://localhost:3001), it serves the `index.html` file.
3. All static assets (e.g., images, CSS files) located in the `public` directory are accessible via their relative paths.
4. The `index.html` file displays job postings with styled cards and images loaded from the `public` directory.

## Example Static Assets

- **CSS**: Styles are served from `public/styles/jass.css`.
- **Images**: Job-related images are served from `public/images/`.

## Key Code Snippets

### Express Middleware

The `express.static` middleware is used to serve static files:
```javascript
app.use(express.static('public'));
```

### HTML Integration

The `index.html` file references static assets such as CSS and images:
```html
<link rel="stylesheet" href="styles/jass.css" />
<img class="card-image" src="images/google.png" />
```

### Example Static Asset Reference

For an image located at `public/images/google.png`, the file is accessible via the URL:
```
http://localhost:3001/images/google.png
```

## Summary

This project demonstrates how to configure an Express.js server to serve static assets from a `public` directory. It showcases how to integrate static files like CSS and images into an HTML file to create a complete web page with dynamic content.
