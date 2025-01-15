# Local-Storage-Todos

## Concepts Covered

- Dynamically managing a to-do list using JavaScript.
- Utilizing browser `localStorage` to persist data across page reloads.
- Handling user interactions with event listeners for adding and removing to-do items.

## Learning Objectives

- Understand how to create, update, and delete elements in the DOM using JavaScript.
- Learn how to use `localStorage` to store and retrieve data.
- Practice using event listeners (`submit` and `click`) to respond to user actions in a web application.

## Features

- **Dynamic Todo Rendering**: The `renderTodos` function clears the existing list, updates the count of to-do items, and dynamically creates list items and buttons for each to-do.
- **Initialization with Local Storage**: The `init` function initializes the application by loading to-dos from `localStorage` and rendering them.
- **Persistent Storage**: The `storeTodos` function saves the current list of to-dos to `localStorage` to ensure data persists across page reloads.
- **User Interaction**:
  - An event listener on the form allows users to add new to-dos.
  - A click event listener on the to-do list allows users to mark to-dos as complete, removing them from the list.

## Summary

This module demonstrates how to build a simple to-do list web application using JavaScript. It covers creating, storing, and rendering to-dos dynamically in the DOM, persisting data using `localStorage`, and handling user interactions through event listeners. The app provides a user-friendly way to manage tasks, with a persistent storage solution that retains tasks between sessions.
