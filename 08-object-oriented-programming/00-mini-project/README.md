# Todo Application Component Architecture

## Concepts Covered

- Object-Oriented Programming (OOP) with JavaScript Classes
- Inheritance and Method Overriding
- Test-Driven Development (TDD) Approach
- Building a Command-Line Interface (CLI) for User Interaction
- Asynchronous File Operations using Promises

## Learning Objectives

1. Understand how to define and implement JavaScript classes using OOP principles.
2. Learn to create test suites to validate core functionality and ensure classes behave as expected.
3. Develop a structured CLI for collecting user input and generating dynamic HTML content.
4. Practice using Promises for handling asynchronous file writing operations.
5. Utilize inheritance to create reusable components for a scalable application architecture.

## Features

- **Component-Based Architecture**: Implements a base `Component` class, which other components like `Header`, `TaskList`, and `TaskListItem` inherit from, enabling modular and reusable code.
- **Dynamic HTML Generation**: The `Header`, `TaskList`, and `TaskListItem` classes generate HTML based on user input, forming a structured and organized task list.
- **Error Handling**: Ensures child classes implement the necessary `render()` method, throwing errors if not defined, promoting proper implementation.
- **Command-Line Interface**: A user-friendly CLI guides users through adding tasks, specifying priorities, and generating a task list saved to an HTML file.
- **Test-Driven Development**: Includes comprehensive test suites for each class, verifying the functionality and ensuring reliable, bug-free code.
- **Priority-Based Task Sorting**: The CLI sorts tasks based on priority, displaying high-priority tasks before others in the generated task list.

## Summary

This Todo Application Component Architecture project demonstrates how to build a modular and scalable application using object-oriented programming. Through a Test-Driven Development (TDD) approach, the project ensures robust code quality by validating each class's core functionality with comprehensive test suites. By utilizing a command-line interface, the project allows users to interactively create a dynamic task list, which is then saved as a well-structured HTML document. This architecture emphasizes reusability, modular design, and maintainability, serving as a solid foundation for building more complex applications.
