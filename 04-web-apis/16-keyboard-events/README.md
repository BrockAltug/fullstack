# Keyboard-Events

# Key Event Listener Application

## Concepts Covered

- JavaScript event listeners for detecting keyboard actions.
- DOM manipulation to update text content based on key events.

## Learning Objectives

- Implement `keydown` and `keyup` event listeners in JavaScript.
- Dynamically update the content of a webpage based on keyboard interactions.
- Understand the difference between `keydown` and `keyup` events.

## Features

- **Keydown Event:** When any key is pressed down, the application detects the event and updates the on-screen status to indicate a "KEYDOWN Event".
- **Keyup Event:** When any key is released, the application detects the event and updates the on-screen status to indicate a "KEYUP Event".
- **Real-Time Feedback:** The status of the key events is displayed in real-time, providing immediate feedback to the user.

## Code Overview

- **Keydown Event:** The `keydownAction(event)` function is triggered whenever a key is pressed down. It updates the `#status` element's text content to reflect the keydown event.
- **Keyup Event:** The `keyupAction()` function is triggered whenever a key is released. It updates the `#status` element's text content to reflect the keyup event.
- **Event Listeners:** Event listeners are attached to the `document` object to detect both `keydown` and `keyup` events, ensuring the page responds to keyboard interactions.

## Summary

This project is a simple application that demonstrates how to handle keyboard events using JavaScript. By implementing `keydown` and `keyup` event listeners, the application provides real-time feedback on the status of key presses and releases, making it a practical example of event-driven programming.
