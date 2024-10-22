# Project Management Dashboard

## Concepts Covered

- DOM manipulation using jQuery
- LocalStorage for data persistence
- Dynamic rendering of project cards based on user input
- Implementing a draggable UI with jQuery UI
- Event handling for form submissions, button clicks, and drag-and-drop interactions
- Real-time time display using `setInterval`
- Conditional UI updates based on project due dates and statuses

## Learning Objectives

- Learn how to manage and manipulate the DOM to create a dynamic web application.
- Understand how to use LocalStorage for persistent data across sessions.
- Implement a drag-and-drop interface for task management using jQuery UI.
- Create and manipulate complex project objects and display them in card format.
- Develop event-driven applications that respond to user input.
- Enhance user experience by providing real-time feedback (such as time display and card coloring based on task deadlines).

## Features

- **Real-time Clock**: Displays the current time in the format `MMM DD, YYYY at hh:mm:ss a`, updated every second.
- **LocalStorage Integration**: Projects are saved and loaded from LocalStorage, allowing for data persistence across page reloads.
- **Dynamic Project Cards**: Users can input project details (name, type, and due date) through a form, and the project is displayed as a card in the appropriate lane (To-do, In Progress, Done).
- **Draggable Task Cards**: Project cards are draggable and can be moved between different lanes (To-do, In Progress, Done).
- **Task Color Coding**: Cards are color-coded based on due date proximity (e.g., yellow for tasks due today, red for overdue tasks).
- **Date Picker**: A date picker widget is available for selecting the project due date.
- **Delete Functionality**: Projects can be deleted, and the project list is updated accordingly.
- **Form Validation**: Ensures all form fields are filled before submitting a new project.

## Summary

This project demonstrates how to build a simple project management dashboard that allows users to create, update, and track tasks in different stages (To-do, In Progress, Done). It leverages jQuery and jQuery UI for DOM manipulation, LocalStorage for persistence, and basic UI interactivity such as dragging and dropping tasks. The dashboard is responsive, interactive, and offers real-time feedback to users through a dynamic UI.
