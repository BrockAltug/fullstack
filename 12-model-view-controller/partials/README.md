# Learning Express Handlebars

## Concepts Covered

- Setting up Express.js with Handlebars as a templating engine
- Dynamic routing and rendering templates with variables
- Using Handlebars helpers for iterative rendering and conditionals

## Learning Objectives

1. Understand how to integrate Handlebars with Express.js for rendering dynamic HTML content.
2. Learn to create and use Handlebars partials to maintain reusable components in templates.
3. Practice rendering data from a JavaScript object to an HTML template using Handlebars syntax.

## Overview

### Card Component

This section focuses on creating a card component for displaying painting information. The card includes links to individual painting pages, displays the painting's title, and shows an image along with its description. The design ensures a user-friendly interface for navigating to detailed painting information.

### Gallery Component

In this section, you will learn to create a gallery display that showcases multiple paintings. The gallery section dynamically displays the name of the gallery and iterates through an array of paintings, rendering a card for each painting. Each card will include a link to the painting detail page, the title, image, and the artist’s name, providing an organized and visually appealing layout for users.

## How to Start

1. **Set Up Environment Variables**: Create a `.env` file to store your database connection details.
2. **Install Dependencies**: Ensure you have Node.js installed, then run the following command to install the necessary packages:
   ```bash
   npm install
   ```
3. **Change Directory to Database**: Navigate to the database directory.
   ```bash
   cd DB
   ```
4. **Initialize the Database**: Run the schema file to set up the database structure.
   ```bash
   \i schema.sql
   ```
5. **Quit the Database Prompt**: Exit the database interface.
   ```bash
   \q
   ```
6. **Seed the Database**: Return to the root directory and run the seed command to populate the database with initial data.
   ```bash
   cd ..
   npm run seed
   ```
7. **Start the Application**: Launch the Express server.
   ```bash
   npm start
   ```

## Summary

This guide provides an overview of integrating Handlebars with Express.js to dynamically generate HTML content. By using Handlebars templates, you can create reusable components and render data effectively from your server. Understanding these concepts is essential for developing dynamic web applications with Express and Handlebars.
