# express-deploy-render

## Deploying an Express.js Application to Render

## Concepts Covered

- Preparing an Express.js application for deployment.
- Configuring a Render service to host the application.
- Ensuring public assets and API routes work seamlessly in a production environment.

## Learning Objectives

- Learn how to deploy an Express.js app to Render.
- Understand the necessary configurations for a successful deployment.
- Test deployment to ensure all routes and static files are functional.

## Deployment Steps

1. **Prepare the Application**:
   - Ensure all dependencies are listed in `package.json`.
   - Verify the `PORT` is dynamically assigned using:
     ```javascript
     const PORT = process.env.PORT || 3001;
     ```

2. **Create a GitHub Repository**:
   - Push your application code to a GitHub repository.

3. **Set Up a Render Service**:
   - Log in to [Render](https://render.com) and create a new Web Service.
   - Connect the Render service to your GitHub repository.
   - Choose the branch to deploy from (e.g., `main`).
   - Specify `node` as the environment and `npm start` as the start command.

4. **Environment Variables**:
   - Ensure the `PORT` environment variable is configured on Render.
   - Render automatically assigns a `PORT` variable, so no manual configuration is required.

5. **Deployment**:
   - Click "Deploy" and wait for the build process to complete.
   - Once deployed, Render provides a URL for accessing your application.

## Application Features

### Static File Serving

- Public assets (HTML, CSS, JS) are served from the `public` directory using:
  ```javascript
  app.use(express.static('public'));
  ```

### Custom Middleware

- Logs request details to the console:
  ```javascript
  app.use(clog);
  ```

### API Routes

- API routes are modularized and handled via `routes/index.js`.

### Example Routes

1. `GET /`:
   - Serves the homepage from `public/index.html`.

2. `GET /feedback`:
   - Serves the feedback page from `public/pages/feedback.html`.

3. `GET /api/tips`:
   - Fetches tips data from the backend.

4. `POST /api/feedback`:
   - Submits new feedback to the backend.

## Expected Behavior

- The application is accessible via the URL provided by Render.
- All API endpoints and static routes function as intended.

## Summary

This project demonstrates how to deploy an Express.js application to Render. It includes static file serving, modular API routes, and middleware functionality, ensuring a seamless production deployment process.
