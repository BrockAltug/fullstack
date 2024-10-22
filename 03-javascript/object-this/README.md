# Object-This

## Concepts Covered

- Understanding the `this` keyword in JavaScript and how its value changes based on the context.
- Differentiating the behavior of `this` in the global scope, inside a function, and within object methods.
- Exploring how `this` refers to different objects depending on whether the code is executed in a browser or Node.js environment.

## Learning Objectives

- Learn how `this` behaves in different JavaScript contexts, such as the global scope, function declarations, and object methods.
- Understand the distinction between how `this` is handled in browser environments (window object) versus Node.js environments (global object).
- Practice applying knowledge of `this` to predict and verify code outputs.

## Features

- **Global Scope Example**: Demonstrates that `this` refers to the `window` object in browsers or the `global` object in Node.js when used in the global scope.
- **Function Scope Example**: Shows how `this` in a standalone function also refers to the global object (`window` in the browser, `global` in Node.js).
- **Object Method Example**: Provides examples of how `this` refers to the parent object when used inside a method defined within an object (`child` and `investor` objects).
- **Nested Object Example**: Illustrates the behavior of `this` in nested objects, specifically within a method defined in the nested `investment` object.

## Summary

This module covers the different ways the `this` keyword can be used in JavaScript and clarifies how its value is determined by the context in which it is called. The examples highlight common use cases and explain the outcomes of using `this` in global, function, and object method scopes, providing a comprehensive understanding of its behavior across environments.
